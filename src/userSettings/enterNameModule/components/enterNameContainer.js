import ElementData from "../../../shared/utils/ElementData";

export default function enterNameContainer(...components)
{
  return new ElementData
  (
    'div',
    'enter-name-field',
    {},
    [...components]
  ).renderElement()
}