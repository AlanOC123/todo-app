import ElementData from "../../../../shared/utils/ElementData";

export default function projectDetailsCard(...components)
{
  return new ElementData
  (
    'div',
    'project-details-card',
    {},
    [...components]
  ).renderElement();
}