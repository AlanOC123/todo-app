import ElementData from "../../../shared/utils/ElementData";

export default function toolInformation(...components)
{
  return new ElementData
  (
    'div',
    'productivity-tool-information',
    {},
    [...components]
  ).renderElement()
}