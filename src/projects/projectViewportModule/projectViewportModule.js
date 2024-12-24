import ElementData from "../../shared/utils/ElementData";
import projectViewportHeader from "./components/projectViewportHeader/projectViewportHeader";
import projectViewportControls from "./components/projectViewportControls/projectViewportControls";
import projectTaskViewport from "./components/projectTaskViewport/projectTaskViewport";

export default (function projectViewportModule() 
{
  const element = new ElementData
  (
    'div',
    'project-viewport',
    {},
    [
      projectViewportHeader(),
      projectViewportControls(),
      projectTaskViewport(),
    ]
  ).renderElement();

  return element;
})()