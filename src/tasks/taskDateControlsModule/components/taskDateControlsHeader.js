import ElementData from "../../../shared/utils/ElementData";
import taskPageState from "../../shared/utils/taskPageState";
import taskDateControlsEventsManager from '../events/taskDateControlsEventsManager';
import taskDateControlsEvents from '../events/taskDateControlsEvents';
import { isToday, isYesterday, isTomorrow, differenceInDays, format } from 'date-fns';

export default function taskDateControlsHeader()
{
  const element = new ElementData
  (
    'div',
    'task-date-controls-header',
    {},
    []
  ).renderElement();

  function setText()
  {
    const currentDate = taskPageState.getDate();
    console.log(currentDate);
    let text;

    if (isToday(currentDate)) text = 'Today';
    else if (isTomorrow(currentDate)) text = 'Tomorrow';
    else if (isYesterday(currentDate)) text = 'Yesterday';
    else text = format(currentDate, 'PP');

    element.textContent = text;
  }

  setText();
  taskDateControlsEventsManager.on(taskDateControlsEvents.dayChanged, setText);
  return element;
}