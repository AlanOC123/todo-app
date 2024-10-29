import ElementData from "../../../shared/utils/ElementData";

export default function toolBody(...components)
{
  return new ElementData
  (
    'div',
    'productivity-tool-body',
    {},
    [...components]
  ).renderElement()
}