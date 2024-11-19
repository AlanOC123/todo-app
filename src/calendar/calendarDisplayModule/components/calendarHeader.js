import calendarSection from "./calendarSection";
import calendarDay from "./calendarDay";

export default function calendarHeader()
{
  const days = 
  [
    'S', 'M', 'T', 'W', 'T', 'F', 'S'
  ];

  const nodes = days.map(day => calendarDay(day, 0));

  return calendarSection(...nodes);
}