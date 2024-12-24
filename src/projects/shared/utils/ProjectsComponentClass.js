import projectViewportEventsManager from "../../projectViewportModule/events/projectViewportEventsManager";
import projectViewportEvents from "../../projectViewportModule/events/projectViewportEvents";

import {
  format,
  parse,
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
} from "date-fns";
import componentCard from "../../selectProjectModule/components/componentCard/componentCard";
import projectsPageEventsManager from "../events/projectsPageEventsManager";
import projectPageEvents from "../events/projectsPageEvents";
import ThoughtBubble from "./ThoughtBubbleClass";
import thoughtBubbleEventsManager from "../../thoughtBubbleModule/events/thoughtBubbleEventsManager";
import thoughtBubbleEvents from "../../thoughtBubbleModule/events/thoughtBubbleEvents";
export default class ProjectComponentsClass {
  #componentID;
  #componentName;
  #parentProject;
  #isComponentActive;
  #componentStartDate;
  #componentCompleteDate;
  #componentCreatedAt;
  #componentLastModified;
  #componentStatus;
  #componentTasks;
  #componentTaskFilter;
  #componentCard;

  #parseDate = (dateString, format = "dd-MM-yyyy") =>
    parse(dateString, format, new Date());

  #formatStandardDate = (dateObject) => format(dateObject, "dd-MM-yyyy");

  #formatDateISO = (dateObject) =>
    format(dateObject, "yyyy-MM-dd'T'HH:mm:ssXXX");

  #formatDateForUI = (isoString) => format(isoString, "PP");

  #generateNumericIdentifier = (length = 10) =>
    Array.from({ length }, () => Math.floor(Math.random() * 10)).join("");

  #resetCardClass = (property) => 
    {
      const map =
      {
        'Status': () => 
        {
          ['not-started', 'in-progress', 'overdue', 'complete'].forEach
            (
              className => this.#componentCard.classList.remove(className)
            ) 
        },
        'Active': () =>
        {
          ['component-card-active'].forEach
          (
            className => this.#componentCard.classList.remove(className)
          ) 
        }
      }
  
      map[property]();
    }

  #setComponentID = () => {
    const componentName = this.#componentName
      ? this.#componentName.split(" ").join("_")
      : "Unnamed_Component";

    const componentDate = this.#componentLastModified
      ? `M:${this.#componentLastModified}`
      : `C:${this.#componentCreatedAt}`;

    this.#componentID = `${componentName}_${componentDate}_${this.#generateNumericIdentifier()}`;
    projectsPageEventsManager.emit(projectPageEvents.componentIDChanged, { component: this });
  };

  #setComponentLastModified = () => {
    this.#componentLastModified = this.#formatDateISO(new Date());
    projectsPageEventsManager.emit(projectPageEvents.componentLastModifiedChanged, { component: this });
  };

  #setComponentStatus = () => {
    const numberOfTasks = this.#componentTasks.length;
    const numberOfCompleteTasks = this.#componentTasks.filter(
      (task) => task.getIsTaskComplete()
    ).length;

    this.#resetCardClass('Status');

    if (
      numberOfTasks > 0 &&
      numberOfTasks === numberOfCompleteTasks
    ) {
      this.#componentStatus = "Complete";
      this.#componentCompleteDate = this.#componentCompleteDate || new Date();
      this.#componentCard.classList.add("complete");
    } else if (numberOfCompleteTasks > 0) {
      this.#componentStatus = "In-Progress";
      this.#componentCompleteDate = null;
      this.#componentCard.classList.add("in-progress");
    } else {
      this.#componentStatus = "Not-Started";
      this.#componentCompleteDate = null;
      this.#componentCard.classList.add("not-started");
    }

    projectsPageEventsManager.emit(projectPageEvents.componentStatusChanged, { component: this });
  };

  #setEvents = () =>
  {
    projectViewportEventsManager.on(projectViewportEvents.projectTaskStatusChanged, this.#setComponentStatus.bind(this))
  }

  constructor(parentProject) {
    const now = new Date();
    this.#componentID = null;
    this.#componentName = "Type Component Name";
    this.#parentProject = parentProject;
    this.#isComponentActive = false;
    this.#componentStartDate = this.#formatStandardDate(now);
    this.#componentCompleteDate = null;
    this.#componentCreatedAt = now;
    this.#componentLastModified = null;
    this.#componentStatus = "Not-Started";
    this.#componentTasks = [];
    this.#componentTaskFilter = 'All Tasks';
    this.#componentCard = componentCard(this);
    this.#setComponentID();
    this.#setEvents();
  }

  setComponentName = (newComponentName) => {
    if (!newComponentName) {
      return;
    }

    const MIN = 2;
    const MAX = 30;

    if (newComponentName.length < MIN || newComponentName.length > MAX) {
      return;
    }

    this.#componentName = newComponentName;
    this.#setComponentLastModified();
    this.#setComponentID();
    projectsPageEventsManager.emit(projectPageEvents.componentNameChanged, { component: this });
  };

  setIsComponentActive = (newStatus) => {
    if (![true, false].includes(newStatus)) {
      return;
    }

    this.#resetCardClass('Active');

    this.#isComponentActive = newStatus;

    if (this.#isComponentActive)
    {
      this.#componentCard.classList.add('component-card-active');
    };

    projectsPageEventsManager.emit(projectPageEvents.componentIsActiveChanged, { component: this });
  };

  addTask = (newTask) => 
  {
    if (!newTask) return;

    this.#componentTasks.push(newTask);
    this.#setComponentStatus();
    this.#setComponentLastModified();
    const newThought = new ThoughtBubble(this.#parentProject, true);
    newThought.setThoughtContent(`Task Added`);
    this.#parentProject.addThought(newThought);
    thoughtBubbleEventsManager.emit(thoughtBubbleEvents.messageAdded, { newThought: newThought });
    projectViewportEventsManager.emit(projectViewportEvents.projectTaskAdded, { projectTaskCardElement: newTask.getTaskCard() });
  };

  deleteTask = (selectedTask) => 
  {
    if (!selectedTask) return;

    const index = this.#componentTasks.findIndex(
      (task) => task === selectedTask
    );

    if (index === -1) {
      return;
    }

    this.#componentTasks.splice(index, 1);
    this.#setComponentStatus();
    this.#setComponentLastModified();
    projectViewportEventsManager.emit(projectViewportEvents.projectTaskDeleted, { projectTaskCardElement: selectedTask.getTaskCard() });
    const newThought = new ThoughtBubble(this.#parentProject, true);
    newThought.setThoughtContent(`Task Deleted`);
    this.#parentProject.addThought(newThought);
    thoughtBubbleEventsManager.emit(thoughtBubbleEvents.messageAdded, { newThought: newThought });
  };

  setComponentTaskFilter = (filterValue) =>
  {
    this.#componentTaskFilter = filterValue;
    projectViewportEventsManager.emit(projectViewportEvents.projectTaskFilterChanged); 
  }
  getComponentID = () => this.#componentID;

  getComponentName = () => this.#componentName;

  getComponentParentProject = () => this.#parentProject;

  getIsComponentActive = () => this.#isComponentActive ? "Yes" : "No";

  getComponentStartDate = () => this.#formatDateForUI(this.#parseDate(this.#componentStartDate));

  getComponentCompleteDate = () => this.#componentCompleteDate;

  getComponentCreatedAt = () => this.#formatDateForUI(this.#componentCreatedAt);

  getComponentModifiedAt = () =>
    this.#componentLastModified
      ? this.#formatDateForUI(this.#componentLastModified)
      : "Un-Modified";

  getComponentStatus = () => this.#componentStatus;

  getComponentTasks = () => this.#componentTasks;

  getComponentTaskFilter = () => this.#componentTaskFilter;

  getComponentCard = () => this.#componentCard;

  getComponentDuration = () => {
    const now = new Date();
    const dayDiff = differenceInDays(now, this.#componentCreatedAt);
    const hrDiff = differenceInHours(now, this.#componentCreatedAt);
    const minDiff = differenceInMinutes(now, this.#componentCreatedAt);

    if (dayDiff > 0) return `${dayDiff} Day${(dayDiff > 1 ? 's' : '')}`;
    if (hrDiff > 0) return `${hrDiff} Hr${(hrDiff > 1 ? 's' : '')}`;
    if (minDiff > 0) return `${minDiff} Min${(minDiff > 1 ? 's' : '')}`;
    return '< 1min';
  };
}
