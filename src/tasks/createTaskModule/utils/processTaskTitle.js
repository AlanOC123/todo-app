import isTaskTitleValid from "../../validation/isTaskTitleValid";
import EventsManager from "../../events/common/EventsManager";
import events from "../../events/common/events";

export default function processTaskTitle(target, container) {
  if (!target || !container) {
    console.error('Invalid Properties Provided.');
    return;
  };

  let value = null;

  const { validFlag, errorMessage } = isTaskTitleValid(target.value);

  value = validFlag ? target.value : value;

  EventsManager.emit(events.taskFormUpdated, { title: value, errorMessage: { titleError: errorMessage } });
}