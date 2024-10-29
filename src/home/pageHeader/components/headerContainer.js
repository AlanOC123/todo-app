import ElementData from "../../../shared/utils/ElementData";

export default function headerContainer(...components)
{
  return new ElementData
  (
    'div',
    'home-header',
    {},
    [...components]
  ).renderElement();
};