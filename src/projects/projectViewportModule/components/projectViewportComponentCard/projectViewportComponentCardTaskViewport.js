import ElementData from "../../../../shared/utils/ElementData";
import renderComponentViewport from "../../utils/renderComponentViewport";

export default function projectViewportComponentCardTaskViewport(componentClass)
{
  const element = new ElementData
  (
    'div',
    'project-viewport-component-card-tasks',
    {},
    []
  ).renderElement();

  function renderViewport()
  {
    renderComponentViewport(componentClass, element);
  }

  renderViewport();

  return element;
}