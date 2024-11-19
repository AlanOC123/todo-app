import { format } from "date-fns";
import projectsEventsManager from "./projectEventsManager";
import projectEvents from "../events/projectsEvents";
import projectViewportComponentCard from "../../projectViewportModule/components/projectViewportComponentCard/projectViewportComponentCard";

export default class ProjectComponentsClass
{
  #componentName;
  #componentID;
  #componentCreatedAt;
  #componentModifiedAt;
  #componentCompletedAt;
  #isComponentComplete;
  #isComponentImportant;
  #componentStatus
  #componentTaskList;
  #componentTaskCount;
  #componentCompleteTaskCount;
  #componentInCompleteTaskCount;
  #projectComponentIsRelatedTo;
  #componentViewportCard;

  #setComponentID = () =>
  {
    let identifierValue = '';
    for (let i = 0; i < 10; i++)
    {
      const value = Math.floor(Math.random() * 9).toString();
      identifierValue += value;
    }

    const projectName = this.#projectComponentIsRelatedTo ? this.#projectComponentIsRelatedTo.getProjectName().split(' ').join('_') : '';

    const componetName = this.#componentName.split(' ').join('_');

    const dateValue = this.#componentModifiedAt ? `M${this.#componentModifiedAt.split(' ').join('_')}` : `C${this.#componentCreatedAt.split(' ').join('_')}`;

    this.#componentID = `${projectName}_${componetName}_${dateValue}_${identifierValue}`;
  }

  #sortTasks = () =>
  {
    this.#componentCompleteTaskCount = 0;
    this.#componentInCompleteTaskCount = 0;
    this.#componentTaskCount = 0;

    this.#componentTaskList.forEach
    (
      task => 
      {
        this.#componentTaskCount++;
        if (task.getIsTaskComplete())
        {
          this.#componentCompleteTaskCount++
        } else
        {
          this.#componentInCompleteTaskCount++;
        }
      }
    )
    this.#setIsComponentComplete();
    projectsEventsManager.emit(projectEvents.projectComponentUpdated, { change: 'taskList', component: this });
  }

  #setIsComponentComplete = () => 
  {
    if (this.#componentInCompleteTaskCount !== 0)
    {
      this.#isComponentComplete = false;
      this.#componentCompletedAt = null;
    } else
    {
      this.#isComponentComplete = true;
      this.#componentCompletedAt = format(new Date(), 'dd-MM-yyyy HH:mm:ss') ;
    }

    this.#setComponentModifiedAt();
    projectsEventsManager.emit(projectEvents.projectComponentUpdated, { change: 'componentComplete', component: this });
  }

  #setComponentModifiedAt = () => 
  { 
    this.#componentModifiedAt = format(new Date(), 'dd-MM-yyyy HH:mm:ss')
    this.#setComponentID();
    this.#componentViewportCard.dataset.id = this.#componentID;
    projectsEventsManager.emit(projectEvents.projectComponentUpdated, { change: 'componentID', component: this });
  }

  #setEvents = () => 
    { 
      function projectChanged({ change, project })
      {
        if (change !== 'projectID')
        {
          return;
        }
        
        if (project === this.#projectComponentIsRelatedTo)
        {
          this.#setComponentModifiedAt();
        }
      }

      function taskChanged({ change, task })
      {
        if (task.getComponentTaskIsRelatedTo() !== this)
        {
          return;
        }

        if (change === 'taskCompletion')
        {
          this.#sortTasks();
        }
      }

      projectsEventsManager.on(projectEvents.projectUpdated, projectChanged.bind(this));
      projectsEventsManager.on(projectEvents.projectTaskUpdated, taskChanged.bind(this));
    };

  constructor
  (
    taskStatus = 'Not-Started',
  )
  {
    this.#componentName = 'New Component';
    this.#componentID = null;
    this.#componentCreatedAt = format(new Date(), 'dd-MM-yyyy HH:mm:ss');
    this.#componentModifiedAt = null;
    this.#componentCompletedAt = null;
    this.#isComponentComplete = false;
    this.#isComponentImportant = false;
    this.#componentStatus = taskStatus;
    this.#componentTaskList = [];
    this.#componentTaskCount = 0;
    this.#componentCompleteTaskCount = 0;
    this.#componentInCompleteTaskCount = 0;
    this.#projectComponentIsRelatedTo = null;
    this.#componentViewportCard = this.createComponentSection();
    this.#setComponentID();
    this.#setEvents();
  }

  setComponentName = newComponentName => 
  {
    if (newComponentName === this.#componentName)
    {
      return;
    }

    const minLength = 3;
    const maxLength = 30;

    if 
    (
      (newComponentName)
      && (newComponentName.length > minLength)
      && (newComponentName.length < maxLength)
    )
    {
      this.#componentName = newComponentName;
      this.#setComponentModifiedAt();
      projectsEventsManager.emit(projectEvents.projectComponentUpdated, { change: 'componentName', component: this });
    }
  }

  setComponentStatus = newStatus => { this.#componentStatus = newStatus }

  addComponentTask = taskToBeAdded =>
  {
    if (!taskToBeAdded)
    {
      return;
    }

    taskToBeAdded.setComponentTaskIsRelatedTo(this);
    this.#componentTaskList.push(taskToBeAdded);
    this.#sortTasks();
  }

  removeComponentTask = taskToBeDeleted =>
  {
    const taskIndex = this.#componentTaskList.findIndex(task => task.getTaskID === taskToBeDeleted.getTaskID);

    if (taskIndex === -1)
    {
      return;
    }

    this.#componentTaskList.splice(taskIndex, 1);
    this.#sortTasks();
  }

  setIsComponentImportant = newImportanceStatus => 
  { 
    const previousValue = this.#isComponentImportant;

    if (previousValue === newImportanceStatus)
    {
      return;
    }

    this.#isComponentImportant = newImportanceStatus;
    this.#setComponentModifiedAt();
    projectsEventsManager.emit(projectEvents.projectComponentUpdated, { change: 'componentImportance', component: this });
  }

  setProjectComponentIsRelatedTo = newProject =>
  {
    if (!newProject)
    {
      return;
    }

    this.#projectComponentIsRelatedTo = newProject;
    this.#setComponentModifiedAt();
  }
  
  createComponentSection = () =>
  {
    const card = projectViewportComponentCard(this);

    return card;
  }

  getComponentName = () => { return this.#componentName; }
  getComponentID = () => { return this.#componentID; }
  getComponentCreatedAt = () => { return this.#componentCreatedAt };
  getComponentModifiedAt = () => { return this.#componentModifiedAt };
  getComponentCompletedAt = () => { return this.#componentCompletedAt };
  getIsComponentComplete = () => { return this.#isComponentComplete; }
  getIsComponentImportant = () => { return this.#isComponentImportant; }
  getComponentStatus = () => { return this.#componentStatus };
  getComponentTaskList = () => { return this.#componentTaskList; }
  getComponentTaskCount = () => { return this.#componentTaskCount; }
  getComponentCompletedTaskCount = () => { return this.#componentCompleteTaskCount; }
  getComponentInCompleteTaskCount = () => { return this.#componentInCompleteTaskCount; };
  getProjectComponentIsRelatedTo = () => { return this.#projectComponentIsRelatedTo; }
  getComponentCard = () => { return this.#componentViewportCard };
}