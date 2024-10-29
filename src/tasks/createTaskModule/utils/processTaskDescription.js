import events from "../../events/common/events";
import EventsManager from "../../events/common/EventsManager";

export default function processTaskDescription(event) {
  if (!event || event.type !== 'blur') {
    console.error('Invalid Event Handled');
    return;
  };

  let value = null;
  let errorMessage = null;

  const target = event.target;

  if (target.checkValidity() && target.value !== '') {
    value = target.value;
  } else {
    errorMessage = 'Invalid Description';
  };

  EventsManager.emit(
    events.taskFormUpdated, { description: value, errorMessage: { descriptionError: errorMessage } }
  )
}