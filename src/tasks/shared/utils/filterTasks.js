import taskPageState from "./taskPageState";
import { filterMap } from "./taskValueMap";
import { isSameDay } from "date-fns";

export default function filterTasks(filterObject, taskList) {
  const [filterHeading, filterValue] = Object.entries(filterObject)[0];
  const currentDate = taskPageState.getDate();

  const noFilters = filterHeading === "All";

  taskList = taskList.filter((task) => {
    const matchesDateCheck = isSameDay(task.getTaskDueDate(), currentDate);
    const isEditing = task.getIsTaskEditing();

    return matchesDateCheck || isEditing;
  });

  if (noFilters || !Array.isArray(taskList)) return taskList;

  return taskList.filter((task) => {
    if (task.getIsTaskEditing()) return true;

    const matchesValueCheck = filterMap[filterHeading](task) === filterValue;
    const matchesDateCheck = isEqual(currentDate, task.getTaskDueDate());

    console.log(matchesDateCheck);
    console.log(matchesValueCheck);
    return matchesValueCheck && matchesDateCheck;
  });
}
