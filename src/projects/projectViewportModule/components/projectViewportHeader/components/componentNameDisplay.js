import ElementData from "../../../../../shared/utils/ElementData";
import projectPageEvents from "../../../../shared/events/projectsPageEvents";
import projectsPageEventsManager from "../../../../shared/events/projectsPageEventsManager";
import projectViewportEventsManager from "../../../events/projectViewportEventsManager";
import projectViewportEvents from "../../../events/projectViewportEvents";
import projectsState from "../../../../shared/utils/projectsState";

export default function componentNameDisplay()
{
  const element = new ElementData
  (
    'p',
    'component-name-display',
    {},
    []
  ).renderElement();

  function setName()
  {
    const activeComponent = projectsState.getActiveComponent();
    let text = 'No Component Selected';

    if (activeComponent)
    {
      if (activeComponent.getComponentName() === 'Type Component Name') return;

      text = activeComponent.getComponentName();
    };

    element.textContent = text;
  };

  function nameChanged({ component })
  {
    const activeComponent = projectsState.getActiveComponent();

    if (activeComponent === component) element.textContent = component.getComponentName();
  };

  setName();
  projectsPageEventsManager.on(projectPageEvents.componentSelected, setName);
  projectsPageEventsManager.on(projectPageEvents.componentNameChanged, nameChanged);
  return element;
}