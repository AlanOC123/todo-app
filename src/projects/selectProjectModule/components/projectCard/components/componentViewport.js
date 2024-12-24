import ElementData from "../../../../../shared/utils/ElementData";
import newComponentButton from "./newComponentButton";
import selectProjectEventsManager from "../../../events/selectProjectEventsManager";
import selectProjectEvents from "../../../events/selectProjectEvents";

export default function componentViewport(projectClass)
{
  const buttonElement = newComponentButton(projectClass);

  const viewportElement = new ElementData
  (
    'ul',
    'project-card-viewport',
    {},
    [ buttonElement ]
  ).renderElement();

  const element = new ElementData
  (
    'div',
    'project-card-viewport-wrapper',
    {},
    [
      viewportElement
    ]
  ).renderElement();

  function renderCard()
  {
    const components = projectClass.getProjectComponents();

    if (components.length === 0) return;

    components.forEach
    (
      component => viewportElement.insertBefore(component.getComponentCard(), buttonElement),
    );
  }

  function componentAdded({ selectedProject, cardElement })
  {
    if (!cardElement || projectClass !== selectedProject) return;

    viewportElement.insertBefore(cardElement, buttonElement);
  };

  function componentDeleted({ selectedProject, cardElement })
  {
    if (!cardElement || projectClass !== selectedProject) return;

    viewportElement.removeChild(cardElement);
  }

  renderCard();
  selectProjectEventsManager.on(selectProjectEvents.componentCardAdded, componentAdded);
  selectProjectEventsManager.on(selectProjectEvents.componentCardDeleted, componentDeleted);

  return element;
}