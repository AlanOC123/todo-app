import events from "../../events/common/events";
import EventsManager from "../../events/common/EventsManager";

export default function processTaskPriority(event) {

  event.preventDefault();

  const target = event.target;
  let value = null;
  let errorMessage = null;

  if (!event || event.type !== 'click') {
    console.error('Invalid Event Issued');
    return;
  }

  const selectedButton = document.querySelector('.selected');

  if (selectedButton) {
    selectedButton.classList.remove('selected');
  };

  target.classList.add('selected');
  value = target.textContent;

  EventsManager.emit(events.taskFormUpdated, { priority: value, errorMessage: { priorityError: errorMessage }});
}