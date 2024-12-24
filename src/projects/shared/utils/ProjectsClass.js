import { format, parse, addDays, differenceInDays, isAfter } from "date-fns";
import projectCard from "../../selectProjectModule/components/projectCard/projectCard";
import projectsPageEventsManager from "../events/projectsPageEventsManager";
import projectPageEvents from "../events/projectsPageEvents";
import projectViewportEventsManager from "../../projectViewportModule/events/projectViewportEventsManager";
import projectViewportEvents from "../../projectViewportModule/events/projectViewportEvents";
import selectProjectEventsManager from "../../selectProjectModule/events/selectProjectEventsManager";
import selectProjectEvents from "../../selectProjectModule/events/selectProjectEvents";
import ThoughtBubble from "./ThoughtBubbleClass";
import storageModule from "../../../shared/utils/storageModule";
import thoughtBubbleEventsManager from '../../thoughtBubbleModule/events/thoughtBubbleEventsManager';
import thoughtBubbleEvents from '../../thoughtBubbleModule/events/thoughtBubbleEvents';
import projectsState from "./projectsState";
export default class ProjectsClass
{
  #projectID;
  #projectName;
  #projectDescription;
  #isProjectActive;
  #projectThoughtBubble;
  #projectStartDate;
  #projectDueDate;
  #projectCompleteDate;
  #projectCreatedAt;
  #projectLastModified;
  #projectStatus;
  #projectComponents;
  #projectCard;
  #projectUserProfile;
  #projectThoughtBubbleFilter;

  #parseDate = (dateString, format = 'dd-MM-yyyy') => 
  {
    parse(dateString, format, new Date())
  };

  #formatStandardDate = (dateObject) => format(dateObject, 'dd-MM-yyyy');

  #formatDateISO = (dateObject) => format(dateObject, "yyyy-MM-dd'T'HH:mm:ssXXX");

  #formatDateForUI = (isoString) => format(isoString, 'PP');

  #checkIsProjectOverdue = () => isAfter(new Date(), this.#projectDueDate);

  #generateNumericIdentifier = (length = 10) => Array.from({ length }, () => Math.floor(Math.random() * 10)).join('');

  #resetCardClass = (property) => 
  {
    const map =
    {
      'Status': () => 
      {
        ['not-started', 'in-progress', 'overdue', 'complete'].forEach
          (
            className => this.#projectCard.classList.remove(className)
          ) 
      },
      'Active': () =>
      {
        ['project-card-active'].forEach
        (
          className => this.#projectCard.classList.remove(className)
        ) 
      }
    }

    map[property]();
  }

  #setProjectID = () =>
  {
    const projectName = this.#projectName ? this.#projectName.split(' ').join('_') : 'Unnamed_Project';

    const projectDate = this.#projectLastModified ? `M:${this.#projectLastModified}` : `C:${this.#projectCreatedAt}`;

    this.#projectID = `${projectName}_${projectDate}_${this.#generateNumericIdentifier()}`;
    projectsPageEventsManager.emit(projectPageEvents.projectIDChanged, { project: this });
  }

  #setProjectLastModified = () => 
  { 
    this.#projectLastModified = this.#formatDateISO(new Date());
    projectsPageEventsManager.emit(projectPageEvents.projectLastModifiedChanged, { project: this });
  };

  #setProjectStatus = () =>
  {
    const numberOfComponents = this.#projectComponents.length;

    if (numberOfComponents === 0) return;

    const numberOfCompleteComponents = this.#projectComponents.filter
    (
      component => component.getComponentStatus() === 'Complete'
    ).length;

    const numberOfInProgressComponents = this.#projectComponents.filter
    (
      component => component.getComponentStatus() === 'In-Progress'
    ).length;

    const isComplete = numberOfCompleteComponents === numberOfComponents;
    const isOverdue = this.#checkIsProjectOverdue();
    const isInProgress = numberOfInProgressComponents >= 1;
    let newStatus;
    let classToAdd;
    let thoughtContent;
    const oldStatus = this.#projectStatus;

    if (isComplete)
    {
      newStatus = 'Complete';
      classToAdd = 'complete';
      thoughtContent = 'Project Complete!';
      this.#projectCompleteDate = this.#projectCompleteDate || new Date();
    } else if (isOverdue)
    {
      newStatus = 'Overdue';
      classToAdd = 'overdue';
      thoughtContent = 'Project Overdue!';
      this.#projectCompleteDate = null;
    } else if (isInProgress)
    {
      newStatus = 'In-Progress';
      classToAdd = 'in-progress';
      thoughtContent = null;
      this.#projectCompleteDate = null;
    } else
    {
      newStatus = 'Not-Started';
      classToAdd = 'not-started';
      thoughtContent = null;
      this.#projectCompleteDate = null;
    };

    this.#resetCardClass('Status');
    this.#projectCard.classList.add(classToAdd);

    if (oldStatus !== newStatus) this.#projectStatus = newStatus;
    else return;

    if (!thoughtContent) return;

    const newThought = new ThoughtBubble(this, true);
    newThought.setThoughtContent(thoughtContent);
    thoughtBubbleEventsManager.emit
    (
      thoughtBubbleEvents.messageAdded,
      { newThought: newThought }
    );
  }

  #setEvents = () =>
  {
    function updateProjectStatus({ component })
    {
      console.log(this.#projectComponents.includes(component));
      if (!this.#projectComponents.includes(component)) return;

      this.#setProjectStatus();
    };

    projectsPageEventsManager.on
    (
      projectPageEvents.componentStatusChanged, updateProjectStatus.bind(this)
    );
  }

  constructor()
  {
    const now = new Date();
    this.#projectID = null;
    this.#projectName = 'Type Project Name';
    this.#projectDescription = 'Type Project Description';
    this.#isProjectActive = false;
    this.#projectThoughtBubble = [];
    this.#projectStartDate = now;
    this.#projectDueDate = 'dd-MM-yyyy';
    this.#projectCompleteDate = null;
    this.#projectCreatedAt = now;
    this.#projectLastModified = null;
    this.#projectStatus = 'Not-Started';
    this.#projectComponents = [];
    this.#projectThoughtBubbleFilter = 'All Thoughts';
    this.#projectCard = projectCard(this);
    this.#projectUserProfile = storageModule.getSettings();
    this.#setProjectID();
    this.#setEvents();
  }

  setProjectName = (newProjectName) =>
  {
    if (!newProjectName) return;

    const oldName = this.#projectName;

    if (oldName === newProjectName) return;

    const MIN = 2;
    const MAX = 30;

    if ((newProjectName.length < MIN) || (newProjectName.length > MAX)) return;

    this.#projectName = newProjectName;
    this.#setProjectLastModified();
    this.#setProjectID();
    projectsPageEventsManager.emit(projectPageEvents.projectNameChanged, { project: this });

    if (oldName === 'Type Project Name') return;

    const newThought = new ThoughtBubble(this, true);
    newThought.setThoughtContent(`Changed Project Name from ${oldName} to ${this.#projectName}`);
    this.addThought(newThought);
    thoughtBubbleEventsManager.emit(thoughtBubbleEvents.messageAdded, { newThought: newThought });
  }

  setIsProjectActive = (newStatus) => 
  {
    this.#resetCardClass('Active');

    if (![true, false].includes(newStatus)) return;

    this.#isProjectActive = newStatus;

    if (this.#isProjectActive) this.#projectCard.classList.add('project-card-active');

    projectsPageEventsManager.emit(projectPageEvents.projectIsActiveChanged, { project: this });
  }

  setProjectDueDate = (newProjectDueDate) =>
  {
    if (!newProjectDueDate) return;

    newProjectDueDate = new Date(newProjectDueDate);

    if (isAfter(new Date(), newProjectDueDate)) return;

    const oldDate = this.#projectDueDate;

    if (oldDate === newProjectDueDate) return;

    this.#projectDueDate = newProjectDueDate;
    this.#setProjectLastModified();
    projectsPageEventsManager.emit(projectPageEvents.projectDueDateChanged, { project: this });

    if (oldDate === 'dd-MM-yyyy') return;

    const newThought = new ThoughtBubble(this, true);
    newThought.setThoughtContent(`Changed Date Project is Due from ${this.#formatDateForUI(oldDate)} to ${this.#formatDateForUI(this.#projectDueDate)}`);
    this.addThought(newThought);
    thoughtBubbleEventsManager.emit(thoughtBubbleEvents.messageAdded, { newThought: newThought });
  }

  addComponent = (newComponent) =>
  {
    if (!newComponent) return;

    const isFirst = this.#projectComponents.length === 0;

    if (isFirst)
    {
      newComponent.setIsComponentActive(true);
      projectsState.setActiveComponent(newComponent);
    };

    this.#projectComponents.push(newComponent);
    this.#setProjectStatus();
    this.#setProjectLastModified();

    selectProjectEventsManager.emit
    (
      selectProjectEvents.componentCardAdded,
      {
        selectedProject: this,
        cardElement: newComponent.getComponentCard(),
      }
    )

    const newThought = new ThoughtBubble(this, true);
    newThought.setThoughtContent(`Added New Component`);
    this.addThought(newThought);
    thoughtBubbleEventsManager.emit(thoughtBubbleEvents.messageAdded, { newThought: newThought });
  }

  deleteComponent = (selectedComponent) =>
  {
    if (!selectedComponent) return;

    const index = this.#projectComponents.findIndex(component => component === selectedComponent);

    if (index === -1) return;

    this.#projectComponents.splice(index, 1);
    this.#setProjectStatus();
    this.#setProjectLastModified();

    selectProjectEventsManager.emit
    (
      selectProjectEvents.componentCardDeleted, 
      { 
        selectedProject: this,
        cardElement: selectedComponent.getComponentCard(),
      }
    );

    projectsPageEventsManager.emit
    (
      projectPageEvents.componentDeleted,
      { selectedComponent: selectedComponent }
    );

    const newThought = new ThoughtBubble(this, true);
    newThought.setThoughtContent(`Deleted Component`);
    this.addThought(newThought);
    thoughtBubbleEventsManager.emit(thoughtBubbleEvents.messageAdded, { newThought: newThought });
  };

  addThought = (newBubble) =>
  {
    if (!newBubble) return;

    if (!newBubble.getThoughtContent()) return;

    this.#projectThoughtBubble.push(newBubble);

    thoughtBubbleEventsManager.emit(thoughtBubbleEvents.messageAdded, { newThought: newBubble });
  }

  deleteThought = (selectedBubble) =>
  {
    if (!selectedBubble) return;

    const index = this.#projectThoughtBubble.findIndex(bubble => bubble === selectedBubble);

    if (index === -1) return;

    this.#projectThoughtBubble.splice(index, 1);

    thoughtBubbleEventsManager.emit(thoughtBubbleEvents.messageDeleted, { selectedThought: selectedBubble });
  }

  setProjectThoughtBubbleFilter = (newFilter) => this.#projectThoughtBubbleFilter = newFilter;

  getProjectID = () => this.#projectID;

  getProjectName = () => this.#projectName;

  getProjectDescription = () => this.#projectDescription;

  getIsProjectActive = () => this.#isProjectActive ? 'Yes' : 'No';

  getProjectStartDate = () => this.#projectStartDate;

  getProjectDueDate = () => this.#projectDueDate === 'dd-MM-yyyy' ? null : this.#formatStandardDate(this.#projectDueDate)

  getProjectCompleteDate = () => this.#projectCompleteDate;

  getProjectCreatedAt = () => this.#formatDateForUI(this.#projectCreatedAt);

  getProjectModifiedAt = () => this.#projectLastModified ? this.#formatDateForUI(this.#projectLastModified) : 'Un-Modified';

  getProjectStatus = () => this.#projectStatus;

  getProjectComponents = () => this.#projectComponents;

  getProjectThoughtBubble = () => this.#projectThoughtBubble;

  getProjectThoughtBubbleFilter = () => this.#projectThoughtBubbleFilter;

  getProjectCard = () => this.#projectCard;

  getProjectUserProfile = () => this.#projectUserProfile;

  getDaysRemaining = () => 
  { 
    return differenceInDays(this.#projectDueDate, this.#projectStartDate);
  };
}
