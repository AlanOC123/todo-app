import ElementData from "../../utils/ElementData";

export default function mainSection()
{
  return new ElementData
  (
    'section',
    'main-section',
    {},
    []
  ).renderElement();
}
