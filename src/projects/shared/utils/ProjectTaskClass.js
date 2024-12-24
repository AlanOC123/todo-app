import thoughtBubbleEventsManager from "../../thoughtBubbleModule/events/thoughtBubbleEventsManager";
import thoughtBubbleEvents from "../../thoughtBubbleModule/events/thoughtBubbleEvents";
import ThoughtBubble from "./ThoughtBubbleClass";
import { differenceInDays, differenceInHours, differenceInMinutes } from 'date-fns';
import projectTaskCard from "../../projectViewportModule/components/projectTaskCard/projectTaskCard";
import projectViewportEventsManager from "../../projectViewportModule/events/projectViewportEventsManager";
import projectViewportEvents from "../../projectViewportModule/events/projectViewportEvents";

export default class ProjectTaskClass 
{
  #taskID;
  #taskName;
  #isTaskComplete;
  #taskCreatedAt;
  #taskCompletedAt;
  #taskLastModified;
  #parentComponent;
  #parentProject;
  #taskPriority;
  #taskCard;

  #generateNumericIdentifier = (length = 10) => Array.from({ length }, () => Math.floor(Math.random() * 10)).join('');

  #resetCardClass = (property) => 
  {
    const map =
    {
      'Priority': () => 
      {
        ['low', 'medium', 'high'].forEach
          (
            className => this.#taskCard.classList.remove(className)
          ) 
      },
      'Complete': () =>
      {
        ['task-complete'].forEach
        (
          className => this.#taskCard.classList.remove(className)
        ) 
      }
    }

    map[property]();
  }

  #setTaskID = () =>
  {
    const taskName = this.#taskName ? this.#taskName.split(' ').join('_') : 'Unnamed_Task';

    const taskDate = this.#taskLastModified ? `M:${this.#taskLastModified}` : `C:${this.#taskCreatedAt}`;

    this.#taskID = `${taskName}_${taskDate}_${this.#generateNumericIdentifier()}`;
  }

  #setTaskLastModified = () => this.#taskLastModified = new Date();

  constructor(parentComponent, priority = 'Low')
  {
    this.#taskID = null;
    this.#taskName = 'Type Task Name';
    this.#isTaskComplete = false;
    this.#taskCreatedAt = new Date();
    this.#taskCompletedAt = null;
    this.#taskLastModified = null;
    this.#parentComponent = parentComponent;
    this.#parentProject = parentComponent.getComponentParentProject();
    this.#taskPriority = priority;
    this.#setTaskID();
    this.#taskCard = projectTaskCard(this);
  }

  setTaskName = (newTaskName) =>
  {
    if (!newTaskName || newTaskName === 'Type Task Name') return;

    const oldName = this.#taskName;

    if (oldName === newTaskName) return
  
    const MIN = 2;
    const MAX = 30;
  
    if ((newTaskName.length < MIN) || (newTaskName.length > MAX)) return;
  
    this.#taskName = newTaskName;
    this.#setTaskLastModified();
    this.#setTaskID();

    if (oldName === 'Type Task Name') return;

    const newThought = new ThoughtBubble(this.#parentProject, true);

    newThought.setThoughtContent(`Changed Task Name from ${oldName} to ${this.#taskName}`);
    this.#parentProject.addThought(newThought);
    thoughtBubbleEventsManager.emit(thoughtBubbleEvents.messageAdded, { newThought: newThought });
    projectViewportEventsManager.emit(projectViewportEvents.projectTaskNameChanged, { projectTask: this });
  }

  setIsTaskComplete = (newStatus) =>
  {
    const oldStatus = this.#isTaskComplete;

    if (oldStatus === newStatus) return;

    this.#isTaskComplete = newStatus;
    this.#resetCardClass('Complete');

    this.#taskCompletedAt = this.#isTaskComplete ? new Date() : null;

    if (this.#isTaskComplete) this.#taskCard.classList.add('task-complete');

    this.#setTaskLastModified();

    const newThought = new ThoughtBubble(this.#parentProject, true);

    newThought.setThoughtContent
    (
      `Task marked as ${this.#isTaskComplete ? 'Complete' : 'In-Complete'}${this.#isTaskComplete ? ` at ${this.#taskCompletedAt}` : ''}`
    );

    this.#parentProject.addThought(newThought);
    thoughtBubbleEventsManager.emit(thoughtBubbleEvents.messageAdded, { newThought: newThought });
    projectViewportEventsManager.emit(projectViewportEvents.projectTaskStatusChanged, { projectTask: this });
  };

  setTaskPriority = (newPriority) =>
  {
    if (!newPriority) return;

    const oldPriority = this.#taskPriority;

    if (oldPriority === newPriority) return;

    this.#resetCardClass('Priority')
    this.#taskPriority = newPriority;
    let classToAdd;

    if (this.#taskPriority === 'Low') classToAdd = 'low';
    else if (this.#taskPriority === 'Medium') classToAdd = 'medium';
    else if (this.#taskPriority === 'High') classToAdd = 'high';
    else return;

    this.#taskCard.classList.add(classToAdd);
    this.#setTaskLastModified();

    const newThought = new ThoughtBubble(this.#parentProject, true);

    newThought.setThoughtContent(`Task Changed from ${oldPriority} to ${newPriority}`);

    this.#parentProject.addThought(newThought);

    thoughtBubbleEventsManager.emit(thoughtBubbleEvents.messageAdded, { newThought: newThought });

    projectViewportEventsManager.emit(projectViewportEvents.projectTaskPriorityChanged, { projectTask: this });
  }

  getTaskID = () => this.#taskID;

  getTaskName = () => this.#taskName;

  getIsTaskComplete = () => this.#isTaskComplete;

  getTaskCreatedAt = () => this.#taskCreatedAt;

  getTaskCompletedAt = () => this.#taskCompletedAt;

  getTaskLastModified = () => this.#taskLastModified;

  getTaskParent = (option = 'Component') =>
  {
    return option === 'Component' ? this.#parentComponent : this.#parentProject;
  };

  getTaskPriority = () => this.#taskPriority;

  getTaskDuration = () =>
  {
    const now = new Date();
    const dayDiff = differenceInDays(now, this.#taskCreatedAt);
    const hrDiff = differenceInHours(now, this.#taskCreatedAt);
    const minDiff = differenceInMinutes(now, this.#taskCreatedAt);

    if (dayDiff > 0) return `${dayDiff} Day${(dayDiff > 1 ? 's' : '')}`;
    if (hrDiff > 0) return `${hrDiff} Hr${(hrDiff > 1 ? 's' : '')}`;
    if (minDiff > 0) return `${minDiff} Min${(minDiff > 1 ? 's' : '')}`;
    return '< 1min';
  }

  getTaskCard = () => this.#taskCard;
}
