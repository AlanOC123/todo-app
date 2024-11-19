import ElementData from "../../../shared/utils/ElementData";
import projectViewportSectionHeader from "./projectViewportSectionHeader";

export default function projectViewportStatusSection(status)
{
  const header = projectViewportSectionHeader(status, '2');

  const componentViewport = new ElementData
  (
    'div',
    'project-viewport-status-section-viewport',
    {},
    []
  ).renderElement()

  const element = new ElementData
  (
    'div',
    'project-viewport-status-section',
    {},
    [
      header,
      componentViewport
    ]
  ).renderElement();

  return element;
}