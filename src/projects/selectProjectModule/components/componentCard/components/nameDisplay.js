import ElementData from "../../../../../shared/utils/ElementData";
import projectPageEvents from "../../../../shared/events/projectsPageEvents";
import projectsPageEventsManager from "../../../../shared/events/projectsPageEventsManager";

export default function nameDisplay(componentClass)
{
  const element = new ElementData
  (
    'p',
    'component-card-name',
    {},
    []
  ).renderElement();

  function setName({ component })
  {
    if (!component || component !== componentClass)
    {
      return;
    };

    element.textContent = componentClass.getComponentName();
  };

  setName({ component: componentClass });
  projectsPageEventsManager.on(projectPageEvents.componentNameChanged, setName);
  return element
}