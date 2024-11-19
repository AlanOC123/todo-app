import ElementData from "../../shared/utils/ElementData";
import projectViewportDisplay from "./components/projectViewportDisplay";
import projectViewportHeader from "./components/projectViewportHeader";

export default (function projectViewportModule() 
{
  const header = projectViewportHeader();
  const viewport = projectViewportDisplay();

  const element = new ElementData
  (
    'div',
    'project-viewport',
    {},
    [
      header,
      viewport
    ]
  ).renderElement();

  return element;
})()