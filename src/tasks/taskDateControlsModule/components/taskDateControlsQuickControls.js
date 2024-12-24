import taskPageState from "../../shared/utils/taskPageState";
import taskViewportEventManager from "../../tasksViewportModule/events/taskViewportEventsManager";
import taskViewportEvents from "../../tasksViewportModule/events/taskViewportEvents";
import taskDateControlsEventsManager from "../events/taskDateControlsEventsManager";
import taskDateControlsEvents from "../events/taskDateControlsEvents";
import ElementData from "../../../shared/utils/ElementData";
import { format, addDays, subDays } from "date-fns";

export default function taskDateControlsQuickControls()
{
  const dayValueMap =
  {
    'Sunday': 0,
    'Monday': 1,
    'Tuesday': 2,
    'Wednesday': 3,
    'Thursday': 4,
    'Friday': 5,
    'Saturday': 6,
  };

  function dayCard(chosenDay)
  {
    const referenceDate = new Date();
    const referenceString = format(referenceDate, 'EEEE');
    const referenceValue = dayValueMap[referenceString];
    const chosenDayValue = dayValueMap[chosenDay];

    const dayDifference = (chosenDayValue - referenceValue + 7) % 7;

    let finalValue;

    if (!dayDifference) finalValue = 'Today';
    else if (dayDifference === 6) finalValue = 'Yesterday';
    else if (dayDifference === 1) finalValue = 'Tomorrow';
    else finalValue = chosenDay;

    return new ElementData
    (
      'div',
      'task-date-controls-quick-select-card',
      {},
      [ finalValue ]
    ).renderElement();
  };

  function getDate(dayText)
  {
    const referenceDate = new Date();

    if (dayText === 'Today') return referenceDate;
    if (dayText === 'Tomorrow') return addDays(referenceDate, 1);
    if (dayText === 'Yesterday') return subDays(referenceDate, 1);

    const referenceString = format(referenceDate, 'EEEE');
    const referenceValue = dayValueMap[referenceString];
    const dayToFindValue = dayValueMap[dayText];

    const dayDifference = (dayToFindValue - referenceValue + 7) % 7;
  
    return dayDifference > 0
    ? addDays(referenceDate, dayDifference)
    : subDays(referenceDate, dayDifference);
  }

  const dayCards = 
  [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
  ].map(day => dayCard(day));

  const element = new ElementData
  (
    'div',
    'task-date-controls-quick-select',
    {},
    [ ...dayCards ]
  ).renderElement();

  function cardClicked(event)
  {
    const selectedDate = getDate(event.target.textContent);
    taskPageState.setDate(selectedDate);
    taskDateControlsEventsManager.emit(taskDateControlsEvents.dayChanged);
    taskViewportEventManager.emit(taskViewportEvents.viewportRefreshed);
  };

  dayCards.forEach(card => card.onclick = cardClicked)

  return element;
}