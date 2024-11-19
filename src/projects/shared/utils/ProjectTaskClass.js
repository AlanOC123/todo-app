import { format } from "date-fns";
import projectsEventsManager from "./projectEventsManager";
import projectEvents from "../events/projectsEvents";
import projectViewportTaskCard from "../../projectViewportModule/components/projectViewportTaskCard/projectViewportTaskCard";

export default class ProjectTaskClass
{
  #taskName;
  #taskID;
  #taskCreatedAt;
  #taskModifiedAt;
  #taskCompletedAt;
  #isTaskComplete;
  #componentTaskIsRelatedTo;
  #taskCardElement;

  #setTaskID = () =>
  {
    let identifierValue = '';
    for (let i = 0; i < 10; i++)
    {
      const value = Math.floor(Math.random() * 9).toString();
      identifierValue += value;
    }

    let projectName = '';

    if (this.#componentTaskIsRelatedTo)
    {
      if (this.#componentTaskIsRelatedTo.getProjectComponentIsRelatedTo())
      {
        projectName = this.#componentTaskIsRelatedTo.getProjectComponentIsRelatedTo().getProjectName().split(' ').join('_');
      }
    }

    const componentName = this.#componentTaskIsRelatedTo ? this.#componentTaskIsRelatedTo.getComponentName().split(' ').join('_') : '';

    const taskName = this.#taskName.split(' ').join('_');

    const dateValue = this.#taskModifiedAt ? `M${this.#taskModifiedAt.split(' ').join('_')}` : `C${this.#taskCreatedAt.split(' ').join('_')}`

    this.#taskID = `${projectName}_${componentName}_${taskName}_${dateValue}_${identifierValue}`;
  }

  #setTaskModifiedAt = () => 
  { 
    this.#taskModifiedAt = format(new Date(), 'dd-MM-yyyy HH:mm:ss');
    this.#setTaskID();
    this.#taskCardElement.dataset.id = this.#taskID;
  }

  #setTaskComplete = () =>
  {
    if (this.#isTaskComplete === true)
    {
      this.#taskCompletedAt = format(new Date(), 'dd-MM-yyyy HH:mm:ss');
    } else 
    {
      this.#taskCompletedAt = null;
    }
    projectsEventsManager.emit(projectEvents.projectTaskUpdated, { change: 'taskCompletion', task: this });
  }

  #createTaskCard = () => { return projectViewportTaskCard(this) };

  #setEvents = () => 
  {
    function componentChanged({ change, component })
    {
      if (component !== this.#componentTaskIsRelatedTo)
      {
        return;
      }

      if (change === 'componentID')
      {
        this.#setTaskModifiedAt();
      }
    }

    projectsEventsManager.on(projectEvents.projectComponentUpdated, componentChanged.bind(this));
  }
  

  constructor
  (
    name = 'Task Name',
    isComplete = false,
    component = null,
  )
  {
    this.#taskName = name;
    this.#taskID = null;
    this.#taskCreatedAt = format(new Date(), 'dd-MM-yyyy HH:mm:ss');
    this.#taskModifiedAt = null;
    this.#taskCompletedAt = null;
    this.#isTaskComplete = isComplete;
    this.#componentTaskIsRelatedTo = component;
    this.#taskCardElement = this.#createTaskCard();
    this.#setTaskID();
    this.#setTaskComplete();
    this.#setEvents();
  }

  setTaskName = newTaskName =>
  {
    const previousValue = this.#taskName;

    if (previousValue === newTaskName)
    {
      return;
    }


    const minLength = 3;
    const maxLength = 30;

    if 
    (
      !(
        newTaskName
        && (newTaskName.length > minLength)
        && (newTaskName.length < maxLength)
      )
    )
    {
      return;
    }

    this.#taskName = newTaskName;
    this.#setTaskModifiedAt();
    projectsEventsManager.emit(projectEvents.projectTaskUpdated, { change: 'taskName', task: this });
  }

  setIsTaskComplete = () =>
  {
    this.#isTaskComplete = !this.#isTaskComplete;
    console.log(this.#isTaskComplete);
    this.#setTaskComplete();
    this.#setTaskModifiedAt();
  }

  setComponentTaskIsRelatedTo = newComponent =>
  {
    if (!newComponent)
    {
      return;
    }

    this.#componentTaskIsRelatedTo = newComponent;
    this.#setTaskModifiedAt();
  }

  getTaskName = () => { return this.#taskName };
  getTaskID = () => { return this.#taskID };
  getTaskCreatedAt = () => { return this.#taskCreatedAt };
  getTaskModifiedAt = () => { return this.#taskModifiedAt };
  getTaskCompletedAt = () => { return this.#taskCompletedAt };
  getIsTaskComplete = () => { return this.#isTaskComplete };
  getComponentTaskIsRelatedTo = () => { return this.#componentTaskIsRelatedTo };
  getTaskCardElement = () => { return this.#taskCardElement };
}