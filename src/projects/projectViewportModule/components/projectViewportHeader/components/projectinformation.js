import ElementData from "../../../../../shared/utils/ElementData";
import projectNameDisplay from "./projectNameDisplay";
import projectNameLabel from "./projectNameLabel";

export default function projectInformation()
{
  return new ElementData
  (
    'div',
    'project-information',
    {},
    [
      projectNameLabel(),
      projectNameDisplay(),
    ]
  ).renderElement()
}