import testTasks from "../../../../shared/utils/testTasks";
import tasksEventsManager from "../../../../shared/utils/tasksEventsManager";
import tasksEvents from '../../../../shared/events/tasksEvents';

export default function deleteTask(event)
{
  let taskIndex;
  if (event instanceof PointerEvent) {
    const target = event.target.closest('.task-card').id;
    taskIndex = testTasks.findIndex(task => task.id === target);
  } else {
    taskIndex = testTasks.findIndex(task => task.id === event.id);
  }

  if (taskIndex !== -1) {
    testTasks.splice(taskIndex, 1);
    console.log(1)
  }

  tasksEventsManager.emit(tasksEvents.tasksUpdated);
  tasksEventsManager.emit(tasksEvents.taskViewportUpdated);
}
