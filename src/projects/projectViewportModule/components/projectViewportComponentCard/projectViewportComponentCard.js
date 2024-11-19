import ElementData from "../../../../shared/utils/ElementData";
import projectViewportComponentCardHeader from "./projectViewportComponentCardHeader";
import projectViewportComponentCardTaskViewport from "./projectViewportComponentCardTaskViewport";

export default function projectViewportComponentCard(componentClass)
{
  const header = projectViewportComponentCardHeader(componentClass);

  const tasksViewport = projectViewportComponentCardTaskViewport(componentClass);

  const element = new ElementData
  (
    'div',
    'project-component-card',
    {
      'data-id': componentClass.getComponentID(),
    },
    [
      header,
      tasksViewport
    ]
  ).renderElement()


  return element;
}