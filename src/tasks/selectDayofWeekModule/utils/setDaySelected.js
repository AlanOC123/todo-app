import tasksEventsManager from '../../shared/utils/tasksEventsManager';
import tasksEvents from '../../shared/events/tasksEvents'
import tasksState from '../../shared/utils/tasksState'
import timeManager from '../../../shared/utils/timeManager';

export default function setDaySelected(event)
{
  const currentButtonDisabled = document.querySelector('.button-disabled');

  if (currentButtonDisabled) {
    currentButtonDisabled.classList.remove('button-disabled');
  }

  const curr = document.querySelector('.day-selected');

  if (event.target.id === 'next-button') 
  {
    const next = curr.nextElementSibling;

    if (next === null || !next) {
      return;
    }

    if (next.nextElementSibling === null) {
      event.target.classList.add('button-disabled');
    }

    curr.classList.remove('day-selected');
    next.classList.add('day-selected');
    const newDay = next.textContent;
    const newDate = timeManager.getDateDifference(newDay);
    tasksState.daySelected = newDay;
    tasksState.dateSelected = newDate;
    tasksEventsManager.emit(tasksEvents.taskViewportUpdated);
    return;
  }

  const prev = curr.previousElementSibling;

  if (prev === null || !prev) {
    return;
  }

  if (prev.previousElementSibling === null) {
    event.target.classList.add('button-disabled');
  }

  curr.classList.remove('day-selected');
  prev.classList.add('day-selected');
  const newDay = prev.textContent;
  const newDate = timeManager.getDateDifference(newDay);
  tasksState.daySelected = newDay;
  tasksState.dateSelected = newDate;
  tasksEventsManager.emit(tasksEvents.taskViewportUpdated);
}