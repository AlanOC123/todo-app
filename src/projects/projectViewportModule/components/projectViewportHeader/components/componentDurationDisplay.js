import ElementData from "../../../../../shared/utils/ElementData";
import projectPageEvents from "../../../../shared/events/projectsPageEvents";
import projectsPageEventsManager from "../../../../shared/events/projectsPageEventsManager";
import projectViewportEventsManager from "../../../events/projectViewportEventsManager";
import projectViewportEvents from "../../../events/projectViewportEvents";
import projectsState from "../../../../shared/utils/projectsState";

export default function componentDurationDisplay()
{
  const element = new ElementData
  (
    'p',
    'component-duration-display',
    {},
    []
  ).renderElement();

  function setTime()
  {
    const activeComponent = projectsState.getActiveComponent();
    if (!activeComponent)
    {
      element.textContent = 'Duration';
      return;
    }

    element.textContent = activeComponent.getComponentDuration();
  };

  setTime();
  projectsPageEventsManager.on(projectPageEvents.componentSelected, setTime);
  projectsPageEventsManager.on(projectPageEvents.componentNameChanged, setTime);
  projectsPageEventsManager.on(projectPageEvents.viewportRefreshed, setTime);
  return element;
}