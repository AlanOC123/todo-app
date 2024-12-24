import ElementData from "../../../../../shared/utils/ElementData";
import projectsState from '../../../../shared/utils/projectsState';
import projectsPageEventsManager from "../../../../shared/events/projectsPageEventsManager";
import projectPageEvents from "../../../../shared/events/projectsPageEvents";
import projectViewportEventsManager from "../../../events/projectViewportEventsManager";
import projectViewportEvents from "../../../events/projectViewportEvents";
import emptyViewportMessage from "./emptyViewportMessage";

export default function projectTaskDisplay()
{
  const element = new ElementData
  (
    'div',
    'project-task-display',
    {},
    []
  ).renderElement();

  function renderElement()
  {
    element.classList.remove('empty');

    while(element.firstChild)
    {
      element.removeChild(element.firstChild);
    };

    const activeProject = projectsState.getActiveProject();
    const activeComponent = projectsState.getActiveComponent();

    if (!activeProject || !activeComponent)
    {
      element.classList.add('empty');
      element.append(emptyViewportMessage('No Components To Display'));
      return;
    }

    const componentTasks = activeComponent.getComponentTasks();

    if (componentTasks.length === 0)
    {
      element.classList.add('empty');
      element.append(emptyViewportMessage('No Tasks To Display'));
      return;
    }

    const filter = activeComponent.getComponentTaskFilter();

    let filteredProjectTasks;

    const map =
    {
      'All Tasks': () => filteredProjectTasks = componentTasks,
      'Complete Tasks': () =>
      {
        filteredProjectTasks = componentTasks.filter
        (
          projectTask => projectTask.getIsTaskComplete(),
        );
      },
      'In-Complete Tasks': () =>
      {
        filteredProjectTasks = componentTasks.filter
        (
          projectTask => !projectTask.getIsTaskComplete(),
        );
      },
      'High Priority Tasks': () =>
      {
        filteredProjectTasks = componentTasks.filter
        (
          projectTask => projectTask.getTaskPriority() === 'High',
        );
      },
      'Medium Priority Tasks': () =>
      {
        filteredProjectTasks = componentTasks.filter
        (
          projectTask => projectTask.getTaskPriority() === 'Medium',
        );
      },
      'Low Priority Tasks': () =>
      {
        filteredProjectTasks = componentTasks.filter
        (
          projectTask => projectTask.getTaskPriority() === 'Low',
        );
      },
    };

    map[filter]();

    if (filteredProjectTasks.length === 0)
    {
      element.classList.add('empty');
      element.append(emptyViewportMessage(`No ${filter} to Display`));
      return;
    }

    filteredProjectTasks.forEach
    (
      projectTask => element.append(projectTask.getTaskCard()),
    );
  }

  function addProjectTask({ projectTaskCardElement })
  {
    if (!projectTaskCardElement) return;

    const emptyMessage = element.querySelector('.empty-viewport-message');

    if (emptyMessage) element.removeChild(emptyMessage);

    element.appendChild(projectTaskCardElement);

    element.classList.remove('empty');
  }

  function deleteProjectTask({ projectTaskCardElement })
  {
    if (!projectTaskCardElement) return;

    element.removeChild(projectTaskCardElement);

    if (!element.firstChild)
    {
      element.classList.add('empty');
      element.append(emptyViewportMessage('No Tasks To Display'));
    };
  }

  renderElement();
  projectsPageEventsManager.on(projectPageEvents.componentSelected, renderElement);
  projectsPageEventsManager.on(projectPageEvents.projectSelected, renderElement);
  projectViewportEventsManager.on(projectViewportEvents.projectTaskFilterChanged, renderElement);
  projectViewportEventsManager.on(projectViewportEvents.projectTaskAdded, addProjectTask);
  projectViewportEventsManager.on(projectViewportEvents.projectTaskDeleted, deleteProjectTask);
  return element;
}