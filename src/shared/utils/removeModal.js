import tasksEventsManager from "../../tasks/shared/utils/tasksEventsManager";
import tasksEvents from "../../tasks/shared/events/tasksEvents";
import calendarEventsManager from '../../calendar/shared/utils/calendarEventsManager';
import calendarEvents from '../../calendar/shared/events/calendarEvents';
import testTasks from "../../tasks/shared/utils/testTasks";
import createTask from "../../tasks/shared/utils/createTask";

export default function removeModal(event) {
  if (
    event.target.id !== "form-modal" &&
    !(event.target instanceof HTMLButtonElement)
  ) {
    return;
  }
  const target = event.target.closest("#form-modal");
  const tasksDisplay = document.querySelector("#tasks");
  const taskID = target.dataset.task;
  const task = testTasks.find(task => task.id === taskID);
  createTask(task);
  if (Array.from(tasksDisplay.children).includes(target)) {
    tasksDisplay.removeChild(target);
    tasksEventsManager.emit(tasksEvents.tasksUpdated);
    tasksEventsManager.emit(tasksEvents.taskViewportUpdated);
    calendarEventsManager.emit(calendarEvents.calendarDaysUpdated);
  } else {
    console.error("Failed to remove modal.");
  }
}
