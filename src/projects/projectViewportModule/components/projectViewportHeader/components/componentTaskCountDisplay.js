import ElementData from "../../../../../shared/utils/ElementData";
import projectPageEvents from "../../../../shared/events/projectsPageEvents";
import projectsPageEventsManager from "../../../../shared/events/projectsPageEventsManager";
import projectViewportEventsManager from "../../../events/projectViewportEventsManager";
import projectViewportEvents from "../../../events/projectViewportEvents";
import projectsState from "../../../../shared/utils/projectsState";

export default function componentTaskCountDisplay()
{
  const element = new ElementData
  (
    'p',
    'component-task-count-display',
    {},
    []
  ).renderElement();

  function setCount()
  {
    const activeComponent = projectsState.getActiveComponent();
    let text = 'Tasks';

    if (activeComponent)
    {
      const numTasks = activeComponent.getComponentTasks().length
      if (activeComponent.getComponentName() === 'Type Component Name')
      {
        return;
      };

      text = `${numTasks} task${numTasks > 1 ? 's' : ''}`;
    };

    element.textContent = text;
  };

  setCount();
  projectsPageEventsManager.on(projectPageEvents.componentSelected, setCount);
  projectViewportEventsManager.on(projectViewportEvents.taskAdded, setCount);
  projectViewportEventsManager.on(projectViewportEvents.taskDeleted, setCount);
  projectsPageEventsManager.on(projectPageEvents.componentNameChanged, setCount);
  return element;
}