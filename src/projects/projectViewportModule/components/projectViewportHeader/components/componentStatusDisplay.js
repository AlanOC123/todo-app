import ElementData from "../../../../../shared/utils/ElementData";
import projectPageEvents from "../../../../shared/events/projectsPageEvents";
import projectsPageEventsManager from "../../../../shared/events/projectsPageEventsManager";
import projectViewportEventsManager from "../../../events/projectViewportEventsManager";
import projectViewportEvents from "../../../events/projectViewportEvents";
import projectsState from "../../../../shared/utils/projectsState";

export default function componentStatusDisplay()
{
  const element = new ElementData
  (
    'p',
    'component-status-display',
    {},
    []
  ).renderElement();

  function setStatus()
  {
    const activeComponent = projectsState.getActiveComponent();
    let text = 'Status';

    if (activeComponent)
    {
      if (activeComponent.getComponentName() === 'Type Component Name')
      {
        return;
      };

      text = activeComponent.getComponentStatus();
    };

    element.textContent = text;
  };

  setStatus();
  projectsPageEventsManager.on(projectPageEvents.componentSelected, setStatus);
  projectsPageEventsManager.on(projectPageEvents.componentStatusChanged, setStatus);
  projectsPageEventsManager.on(projectPageEvents.componentNameChanged, setStatus);
  return element;
}