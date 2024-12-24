import { isAfter, format, parse, differenceInDays, startOfDay  } from "date-fns";
import taskViewportEventManager from '../../tasksViewportModule/events/taskViewportEventsManager';
import taskViewportEvents from "../../tasksViewportModule/events/taskViewportEvents";
import taskCard from '../../shared/components/taskCard/taskCard'

export default class TaskClass
{
  #taskID;
  #taskName;
  #taskStatus;
  #taskPriority;
  #taskDifficulty;
  #taskCategory;
  #taskCreatedAt;
  #taskModifiedAt;
  #taskCompletedAt;
  #taskDueDate;
  #isTaskComplete;
  #isTaskOverdue;
  #isTaskEditing;
  #taskCard;

  #generateNumericIdentifier = (length = 10) => Array.from({ length }, () => Math.floor(Math.random() * 10)).join('');

  #setTaskID = () =>
  {
    const taskName = this.#taskName ? this.#taskName.split(' ').join('_') : 'Unnamed_Task';

    const taskDate = this.#taskModifiedAt ? `M:${this.#taskModifiedAt}` : `C:${this.#taskCreatedAt}`;

    this.#taskID = `${taskName}_${taskDate}_${this.#generateNumericIdentifier()}`;
  };

  #setTaskModifiedAt = () => this.#taskModifiedAt = new Date();

  #setIsTaskOverdue = () => 
  {
    const referenceDate = startOfDay(new Date());
    const dateToCheck = startOfDay(this.#taskDueDate);
    this.#isTaskOverdue = isAfter(referenceDate, dateToCheck);
  };

  constructor()
  {
    this.#taskID = null;
    this.#taskName = 'Type Task Name';
    this.#taskStatus = null;
    this.#taskPriority = null;
    this.#taskDifficulty = null;
    this.#taskCategory = null;
    this.#taskCreatedAt = new Date();
    this.#taskModifiedAt = null;
    this.#taskCompletedAt = null;
    this.#taskDueDate = null;
    this.#isTaskComplete = false;
    this.#isTaskOverdue = false;
    this.#isTaskEditing = false;
    this.#taskCard = null;
    this.#setTaskID();
    this.#taskCard = taskCard(this);
  }

  setTaskName = (newTaskName) =>
  {
    if (!newTaskName) return;

    const oldName = this.#taskName;

    if (oldName === newTaskName) return;

    const MIN = 2;
    const MAX = 30;

    if ((newTaskName.length < MIN) || (newTaskName.length > MAX)) return;

    this.#taskName = newTaskName;
    this.#setTaskModifiedAt();
    this.#setTaskID();
    taskViewportEventManager.emit(taskViewportEvents.taskNameChanged, { task: this });
    taskViewportEventManager.emit(taskViewportEvents.viewportRefreshed);
  };

  setTaskStatus = (newStatus) =>
  {
    if (!newStatus) return;

    if (newStatus === 'Complete')
    {
      this.#isTaskComplete = true;
      this.#taskStatus = newStatus;
      if (!this.#taskCompletedAt) this.#taskCompletedAt = new Date();
      taskViewportEventManager.emit(taskViewportEvents.taskStatusChanged, { task: this })
      taskViewportEventManager.emit(taskViewportEvents.viewportRefreshed);
      return;
    }

    const isComplete = this.#isTaskComplete;
    const isOverDue = this.#isTaskOverdue;

    if (isOverDue && !isComplete)
    {
      this.#taskStatus = 'Overdue';
      this.#setTaskModifiedAt();
      this.#setTaskID();
      taskViewportEventManager.emit(taskViewportEvents.taskStatusChanged, { task: this })
      taskViewportEventManager.emit(taskViewportEvents.viewportRefreshed);
      return;
    }

    this.#taskStatus = newStatus;
    this.#setTaskModifiedAt();
    this.#setTaskID();
    taskViewportEventManager.emit(taskViewportEvents.taskStatusChanged, { task: this })
    taskViewportEventManager.emit(taskViewportEvents.viewportRefreshed);
  };

  setTaskPriority = (newPriority) =>
  {
    if (!newPriority) return;

    const oldPriority = this.#taskPriority;

    if (oldPriority === newPriority) return;

    this.#taskPriority = newPriority;
    this.#setTaskModifiedAt();
    this.#setTaskID();
    taskViewportEventManager.emit(taskViewportEvents.taskPriorityChanged, { task: this })
    taskViewportEventManager.emit(taskViewportEvents.viewportRefreshed);
  };

  setTaskDifficulty = (newDifficulty) =>
  { 
    if (!newDifficulty) return;

    const oldDifficulty = this.#taskDifficulty;
    if (oldDifficulty === newDifficulty) return;

    this.#taskDifficulty = newDifficulty;
    this.#setTaskModifiedAt();
    this.#setTaskID();
    taskViewportEventManager.emit(taskViewportEvents.taskDifficultyChanged, { task: this });
    taskViewportEventManager.emit(taskViewportEvents.viewportRefreshed);
  }

  setTaskCategory = (newCategory) =>
  {
    if (!newCategory) return;
    const currentCategory = this.#taskCategory;

    if (currentCategory === newCategory) return;

    if (currentCategory && currentCategory !== 'General')
    {
      this.#taskCategory.deleteCategoryTask(this);
    }
    this.#taskCategory = newCategory;

    this.#setTaskModifiedAt();
    this.#setTaskID();
    taskViewportEventManager.emit(taskViewportEvents.taskCategoryChanged, { task: this })
    taskViewportEventManager.emit(taskViewportEvents.viewportRefreshed);
  }

  setTaskDueDate = (newDueDate) =>
  {
    if (!newDueDate) return;

    const oldDueDate = this.#taskDueDate;

    if (oldDueDate === newDueDate) return;

    this.#taskDueDate = newDueDate;
    this.#setTaskModifiedAt();
    this.#setTaskID();
    taskViewportEventManager.emit(taskViewportEvents.taskDueDateChanged, { task: this })
    taskViewportEventManager.emit(taskViewportEvents.viewportRefreshed);

    this.#setIsTaskOverdue();
    if (this.#isTaskOverdue) this.setTaskStatus('Overdue');
  };

  setIsTaskComplete = (newStatus) =>
  {
    if (newStatus)
    {
      this.setTaskStatus('Complete');
      return;
    }

    this.#isTaskComplete = false;
    this.#taskCompletedAt = null;

    this.#setTaskModifiedAt();
    this.#setTaskID();

    if (this.#taskStatus === 'Complete') this.setTaskStatus('In Progress');
  };

  setIsTaskEditing = (newStatus) =>
  {
    this.#isTaskEditing = newStatus;
    if (newStatus) this.#taskCard = taskCard(this);
  }

  getTaskID = () => this.#taskID;

  getTaskName = () => this.#taskName;

  getTaskDueDate = () => this.#taskDueDate;

  getTaskStatus = () => this.#taskStatus;

  getTaskPriority = () => this.#taskPriority;

  getTaskDifficulty = () => this.#taskDifficulty;

  getTaskCategory = () => this.#taskCategory;

  getTaskCreatedAt = () => this.#taskCreatedAt;

  getTaskModifiedAt = () => this.#taskModifiedAt;

  getTaskCompletedAt = () => this.#taskCompletedAt;

  getIsTaskComplete = () => this.#isTaskComplete;

  getIsTaskOverdue = () => this.#isTaskOverdue;

  getIsTaskEditing = () => this.#isTaskEditing;

  getTimeRemaining = () => differenceInDays(this.#taskDueDate, new Date());

  getFormattedDueDate = () => format(this.#taskDueDate, 'PP');

  getFormattedCompletedDate = () =>
  {
    return this.#taskCompletedAt ? format(this.#taskCompletedAt, 'PP') : null;
  };

  getTaskCard = () => this.#taskCard;
}