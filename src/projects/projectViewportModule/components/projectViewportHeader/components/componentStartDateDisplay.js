import ElementData from "../../../../../shared/utils/ElementData";
import projectPageEvents from "../../../../shared/events/projectsPageEvents";
import projectsPageEventsManager from "../../../../shared/events/projectsPageEventsManager";
import projectViewportEventsManager from "../../../events/projectViewportEventsManager";
import projectViewportEvents from "../../../events/projectViewportEvents";
import projectsState from "../../../../shared/utils/projectsState";

export default function componentStartDateDisplay()
{
  const element = new ElementData
  (
    'p',
    'component-start-date-display',
    {},
    []
  ).renderElement();

  function setDate()
  {
    const activeComponent = projectsState.getActiveComponent();
    let text = 'Start Date';

    if (activeComponent)
    {
      if (activeComponent.getComponentName() === 'Type Component Name')
      {
        return;
      };

      text = activeComponent.getComponentStartDate();
    };

    element.textContent = text;
  };

  setDate();
  projectsPageEventsManager.on(projectPageEvents.componentSelected, setDate);
  projectsPageEventsManager.on(projectPageEvents.componentNameChanged, setDate);
  return element;
}