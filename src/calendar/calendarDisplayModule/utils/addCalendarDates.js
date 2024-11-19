import calendarState from "../../shared/utils/calendarState";
import { startOfMonth, endOfMonth, eachDayOfInterval, getDay, format } from 'date-fns';
import getMonthsTasks from "./getMonthsTasks";
import testTasks from "../../../tasks/shared/utils/testTasks";

export default function addCalendarDates()
{
  const datesInCalendarMonth = new Map();
  const weeksInCalendarMonth = [];

  const lookupDates = [];

  const { currentMonth, currentYear } = calendarState;

  const startDate = startOfMonth(new Date(currentYear, currentMonth));
  const endDate = endOfMonth(startDate);

  const daysInMonth = eachDayOfInterval({ start: startDate, end: endDate });

  const startDayOfWeek = getDay(startDate);

  const monthsTasks = (getMonthsTasks(testTasks)).map(date => date.toString().padStart(2, '0'));

  for (let i = 0; i < startDayOfWeek; i++)
  {
    const map = new Map
    (
      [
        ['dateValue', "null"], ['taskCount', 0]
      ]
    );
    lookupDates.push(map);
  }

  daysInMonth.forEach
  (
    day => 
    { 
      const map = new Map
      (
        [
          ['dateValue', (day ? format(day, 'dd') : ' ')], ['taskCount', 0]
        ]
      );
      lookupDates.push(map)
    }
  );

  const daysAfterEndOfMonth = 6 - getDay(endDate);

  for (let i = 0; i < daysAfterEndOfMonth; i++)
  {
    const map = new Map
    (
      [
        ['dateValue', "null"], ['taskCount', 0]
      ]
    );
    lookupDates.push(map);
  }

  monthsTasks.forEach
  (
    date =>
    {
      const dateFound = lookupDates.find
      (
        map => map.get('dateValue') === date,
      )
      dateFound.set('taskCount', dateFound.get('taskCount') + 1)
    }
  );

  for (let i = 0; i < lookupDates.length; i++)
  {
    const map = lookupDates[i];
    datesInCalendarMonth.set(i, map);
  };

  const weeks = [];

  for (let i = 0; i < datesInCalendarMonth.size; i += 7 )
  {
    const row = [...datesInCalendarMonth.entries()].slice(i, i + 7);
    weeksInCalendarMonth.push(row);
  };

  weeks.forEach
  (
    week => 
    { 
      weeksInCalendarMonth.push
      (
        week.join(' ')
      ) 
    }
  )

  return weeksInCalendarMonth;
}