import sectionConstructor from "./sectionConstructor";
import getDatesInCurrentMonth from '../../shared/utils/getDatesInCurrentMonth';
import { parse, format } from 'date-fns';
import calendarSection from "../components/calendarSection";
import calendarHeader from "../components/calendarHeader";
import calendarDay from "../components/calendarDay";
import getMonthsTasks from "./getMonthsTasks";
import testTasks from '../../../tasks/shared/utils/testTasks';
import calendarState from "../../shared/utils/calendarState";
import addCalendarDates from "./addCalendarDates";

export default function populateCalendar(calendar)
{
  if (!calendar)
  {
    return;
  }

  while(calendar.firstChild)
  {
    calendar.removeChild(calendar.firstChild);
  }

  const calendarData = addCalendarDates();

  calendar.append(calendarHeader())

  calendarData.forEach
  (
    row =>
    {
      const section = calendar.appendChild(calendarSection());
      row.forEach
      (
        entry =>
        {
          const [value, map] = entry;
          section.append(calendarDay(map.get('dateValue'), map.get('taskCount').toString()))
        }
      )
    }
  )
}
