import isDateValid from "../../validation/isTaskDateValid";
import EventsManager from "../../events/common/EventsManager";
import events from "../../events/common/events";

export default function processTaskDate(target) {

  let value = null;
  let key = null;

  if (!target) {
    console.error('Element not found');
    return;
  };

  const { validFlag, errorMessage } = isDateValid(target);
  const [ startDate, dueDate, completeDate ] = Array.from(document.querySelectorAll('.date-section'));
  const [ startInput, dueInput, completeInput ] = Array.from(document.querySelectorAll('.date-input'));

  if (!validFlag && target.id === 'start-date') {
    dueDate.style.display = 'none';
    completeDate.style.display = 'none';
  }

  if (!validFlag && target.id === 'due-date') {
    completeDate.style.display = 'none';
  }

  if (validFlag && target.id === 'start-date') {
    dueDate.style.display = 'flex';
    completeDate.style.display = 'none';
    dueInput.min = completeInput.max = value = target.value;
    key = 'startDate'
  } else if (validFlag && startInput.value !== 'dd-mm-yyyy' && target.id === 'due-date') {
    completeDate.style.display = 'flex';
    value = target.value;
    key = 'dueDate';
  } else if (validFlag && dueInput.value !== 'dd-mm-yyyy' && target.id === 'complete-date') {
    value = target.value;
    key = 'completionDate';
  }

  EventsManager.emit(events.taskFormUpdated, { [ key ]: value, errorMessage: { dateError: errorMessage } });
}