import ElementData from "../../../shared/utils/ElementData";

export default function selectDaysofWeekContainer(...components)
{
  return new ElementData
  (
    'div',
    'select-days',
    {},
    [...components]
  ).renderElement();
};