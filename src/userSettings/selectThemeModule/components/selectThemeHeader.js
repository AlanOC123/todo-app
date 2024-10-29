import ElementData from "../../../shared/utils/ElementData";

export default function selectThemeHeader()
{
  return new ElementData
  (
    'p',
    'select-theme-header',
    {},
    ['Themes']
  ).renderElement()
}