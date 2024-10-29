import events from "../../events/common/events";
import EventsManager from "../../events/common/EventsManager";

export default function processTaskDataDropdown(event) {
  let value = null;
  let key = null;
  let errorMessage = null;

  if (!event || event.type !== 'change') {
    console.error('Invalid Event Caught');
    return;
  };

  const target = event.target;
  key = target.id === 'status-menu' ? 'status' : 'category';
  value = target.value;

  EventsManager.emit(events.taskFormUpdated, { [ key ]: value, errorMessage: { [`${key}Error`]: errorMessage }});
}