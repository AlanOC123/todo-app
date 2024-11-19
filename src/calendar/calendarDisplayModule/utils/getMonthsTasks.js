import calendarState from "../../shared/utils/calendarState";

export default function getMonthsTasks(tasks)
{
  return tasks.filter
  (
    ({ dueDate }) =>
    {
      return Number(dueDate.split('-').splice(1, 1)[0]) === calendarState.currentMonth + 1;
    }
  ).map(({ dueDate }) => { return Number(dueDate.split('-').splice(0, 1)[0]) });
}