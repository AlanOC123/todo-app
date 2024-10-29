import ElementData from "../../../shared/utils/ElementData"

export default function selectThemeContainer(...components)
{
  return new ElementData
  (
    'div',
    'select-theme-field',
    {},
    [...components]
  ).renderElement();
}