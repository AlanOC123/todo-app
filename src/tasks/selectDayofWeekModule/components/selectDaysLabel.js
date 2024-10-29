import ElementData from "../../../shared/utils/ElementData";

export default function selectDaysLabel()
{
  return new ElementData
  (
    'p',
    'select-days-label',
    {},
    ['Current Day:']
  ).renderElement()
}