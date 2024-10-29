import tasksState from "../../shared/utils/tasksState";
import taskValues from '../../shared/utils/taskValues';
import tasksEventsManager from "../../shared/utils/tasksEventsManager";
import tasksEvents from '../../shared/events/tasksEvents';

export default function changeSortByValue(key)
{
  const option = Object.keys(taskValues).find(sortByOption => taskValues[sortByOption].sortByText === key);

  tasksState.sortBy = taskValues[option].sortByID;
  tasksEventsManager.emit(tasksEvents.taskViewportUpdated);
}