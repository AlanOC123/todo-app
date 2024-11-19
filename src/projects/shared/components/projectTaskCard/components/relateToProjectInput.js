import ElementData from "../../../../../shared/utils/ElementData";
import relatedToProjectList from "./relatedToProjectList";
import relatedToProjectLabel from "./relatedToProjectLabel";

export default function relatedToProjectInput()
{
  return new ElementData
  (
    'div',
    'relate-task-to-container',
    {},
    [
      relatedToProjectLabel(),
      relatedToProjectList()
    ]
  ).renderElement()
}