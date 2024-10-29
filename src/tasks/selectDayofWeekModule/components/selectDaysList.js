import timeManager from "../../../shared/utils/timeManager";
import listField from "../../../shared/components/list";
import selectDayListTextNode from "./selectDaysListTextNode";

export default function selectDaysList() 
{
  const listItems = timeManager.daysMap.map(node => selectDayListTextNode(node));

  const element = listField('select-day-list', 'select-day-list');

  listItems.forEach(node => {
    element.append(node)
  })

  return element;
}