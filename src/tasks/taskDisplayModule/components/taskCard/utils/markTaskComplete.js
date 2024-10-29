import tasksEventsManager from "../../../../shared/utils/tasksEventsManager";
import tasksEvents from '../../../../shared/events/tasksEvents';
import testTasks from "../../../../shared/utils/testTasks";

export default function markTaskComplete(event)
{
  const target = event.target.closest('.task-card').id;
  const task = testTasks.find(task => task.id === target);

  task.updateStatus('Complete');
  tasksEventsManager.emit(tasksEvents.taskViewportUpdated);
  tasksEventsManager.emit(tasksEvents.tasksUpdated);
}