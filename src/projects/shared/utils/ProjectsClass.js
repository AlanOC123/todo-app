import { format, parse, isAfter } from "date-fns";
import projectsEventsManager from "./projectEventsManager";
import projectEvents from "../events/projectsEvents";
import selectProjectCard from '../../selectProjectModule/components/selectProjectCard';

export default class ProjectsClass
{
  #projectName;
  #projectID;
  #projectCreatedAt;
  #projectModifiedAt;
  #projectCompletedAt;
  #projectDueDate;
  #projectStatus;
  #isProjectComplete;
  #projectComponents;
  #projectComponentsCount;
  #projectCompletedComponentsCount;
  #projectInCompleteComponentsCount;
  #numberOfProjectRelatedTasks;
  #projectCompletionProgress;
  #projectCardElement;

  #setProjectID = () =>
  {
    let identifierValue = '';
    for (let i = 0; i < 10; i++)
    {
      const value = Math.floor(Math.random() * 9).toString();
      identifierValue += value;
    }

    const projectName = this.#projectName.split(' ').join('_');

    const dateValue = this.#projectModifiedAt ? `M${this.#projectModifiedAt.split(' ').join('_')}` : `C${this.#projectCreatedAt.split(' ').join('_')}`;

    this.#projectID = `${projectName}_${dateValue}_${identifierValue}`;
  }

  #checkIsProjectOverdue = () =>
  {
    const currentDate = new Date();

    const formattedDueDate = parse(this.#projectDueDate, 'dd-MM-yyyy', new Date());

    if (isAfter(currentDate, formattedDueDate) && !this.#isProjectComplete)
    {
      this.#projectStatus = 'Overdue';
    }
  }

  #sortProjectComponents = () =>
  {
    this.#projectComponentsCount = 0;
    this.#projectCompletedComponentsCount = 0;
    this.#projectInCompleteComponentsCount = 0;
    this.#numberOfProjectRelatedTasks = 0;

    this.#projectComponents.forEach
    (
      component =>
      {
        this.#projectComponentsCount++;
        this.#numberOfProjectRelatedTasks += component.getComponentTaskCount();
        if (component.getIsComponentComplete())
        {
          this.#projectCompletedComponentsCount++;
        } else
        {
          this.#projectInCompleteComponentsCount++;
        }
      } 
    )

    this.#setProjectCompletionRate();
    projectsEventsManager.emit(projectEvents.projectUpdated, { change: 'projectComponents', project: this });
  }

  #setIsProjectCompleted = () =>
  {
    if (this.#projectCompletionProgress === 100)
    {
      this.#isProjectComplete = true;
      this.#projectStatus = 'Complete';
    }

    if (this.#isProjectComplete)
    {
      this.#projectCompletedAt = format(new Date(), 'dd-MM-yyyy HH:mm:ss');
    } else
    {
      this.#projectCompletedAt = null;
    }

    projectsEventsManager.emit(projectEvents.projectUpdated, { change: 'projectComplete', project: this });
  }

  #setProjectCompletionRate = () => 
    {
      if (this.#projectComponents.length === 0)
      {
        return null;
      }
  
      this.#projectCompletionProgress = ((this.#projectCompletedComponentsCount / this.#projectComponentsCount) * 100).toFixed(0);
      this.#setIsProjectCompleted();
    }

  #setProjectModifiedAt = () => 
  { 
    this.#projectModifiedAt = format(new Date(), 'dd-MM-yyyy HH:mm:ss');
    this.#setProjectID();
    this.#projectCardElement.dataset.id = this.#projectID;
    projectsEventsManager.emit(projectEvents.projectUpdated, { change: 'projectID', project: this });
  }


  #createProjectCard = () =>
    {
      return selectProjectCard(this);
    }

  #setEvents = () => 
  {
    function changeComponents({ change, component })
    {
      if (change !== 'taskList')
      {
        return;
      }

      if (this.#projectComponents.includes(component))
      {
        this.#sortProjectComponents();
      }
    }

    projectsEventsManager.on(projectEvents.projectComponentUpdated, changeComponents.bind(this));
  }

  constructor
  (
    name = 'New Project', 
    dueDate = format(new Date(), 'dd-MM-yyyy'),
    components = [],
  )
  {
    this.#projectName = name;
    this.#projectID = null;
    this.#projectCreatedAt = format(new Date(), 'dd-MM-yyyy HH:mm:ss') ;
    this.#projectModifiedAt = null;
    this.#projectCompletedAt = null;
    this.#projectDueDate = dueDate;
    this.#isProjectComplete = false;
    this.#projectComponents = components;
    this.#projectComponentsCount = 0;
    this.#projectCompletedComponentsCount = 0;
    this.#projectInCompleteComponentsCount = 0;
    this.#numberOfProjectRelatedTasks = 0;
    this.#projectCompletionProgress = null;
    this.#setProjectID();
    this.#projectCardElement = this.#createProjectCard();
    this.#setEvents();
  }

  setProjectName = newProjectName =>
  {
    if (!newProjectName)
    {
      return;
    }

    this.#projectName = newProjectName;
    this.#setProjectModifiedAt();
    projectsEventsManager.emit(projectEvents.projectUpdated, { change: 'projectName', project: this });
  }

  setProjectDueDate = newProjectDueDate =>
  {
    if (!newProjectDueDate)
    {
      return;
    }

    this.#projectDueDate = format(newProjectDueDate, 'dd-MM-yyyy');
    this.#checkIsProjectOverdue();
    this.setProjectStatus();
    this.#setProjectModifiedAt();
  }

  setProjectStatus = newProjectStatus =>
  {
    if (!newProjectStatus || this.#isProjectComplete)
    {      
      return;
    }
    
    if (this.#projectStatus === 'Overdue')
      {
        return;
      }

    this.#projectStatus = newProjectStatus;
    this.#setProjectModifiedAt();
  }

  addProjectComponent = componentToBeAdded =>
  {
    if (!componentToBeAdded)
    {
      return;
    }

    componentToBeAdded.setProjectComponentIsRelatedTo(this);
    this.#projectComponents.push(componentToBeAdded);
    this.#sortProjectComponents();
  }

  removeProjectComponent = componentToBeDeleted =>
  {
    if (!componentToBeDeleted)
    {
      return;
    };

    const componentIndex = this.#projectComponents.findIndex(component => componentToBeDeleted.getComponentID() === component.getComponentID());

    if (componentIndex ===  -1)
    {
      return;
    }

    this.#projectComponents.splice(componentIndex, 1);
    this.#sortProjectComponents();
  }

  getProjectName = () => { return this.#projectName };
  getProjectID = () => { return this.#projectID };
  getProjectCreatedAt = () => { return this.#projectCreatedAt };
  getProjectModifiedAt = () => { return this.#projectModifiedAt }
  getProjectCompletedAt = () => { return this.#projectCompletedAt }
  getProjectDueDate = () => { return this.#projectDueDate };
  getIsProjectComplete = () => { return this.#isProjectComplete };
  getProjectComponents = () => { return this.#projectComponents };
  getProjectComponentsCount = () => { return this.#projectComponentsCount; }
  getProjectCompletedComponentsCount = () => 
  { 
    return this.#projectCompletedComponentsCount 
  };
  getProjectInCompleteComponentsCount = () => 
  { 
    return this.#projectInCompleteComponentsCount 
  };
  getNumberOfProjectRelatedTasks = () => 
  {
    return this.#numberOfProjectRelatedTasks;
  }
  getProjectCompletionProgress = () => 
  { 
    return this.#projectCompletionProgress 
  }
  getCardElement = () => { return this.#projectCardElement }
}
