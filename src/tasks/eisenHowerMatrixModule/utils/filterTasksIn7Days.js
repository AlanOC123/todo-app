import { differenceInDays } from "date-fns"

export default function filterTasksIn7Days(tasksArray)
{
  return tasksArray.filter
  (
    task =>
    {
      const referenceDate = new Date();
      const dateToCheck = task.getTaskDueDate();
      const isOverdue = task.getIsTaskOverdue();

      const inDateRange = differenceInDays(dateToCheck, referenceDate) < 7;

      return inDateRange || isOverdue;
    }
  )
}