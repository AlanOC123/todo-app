import calendarState from '../../shared/utils/calendarState';
import monthsMap from './monthsMap';

export default function updateMonthDisplay(displayElement)
{
  const { currentMonth  } = calendarState;

  const selectedMonth = [...monthsMap.values()].find(month => month.monthIndex === currentMonth);

  if (selectedMonth)
  {
    displayElement.textContent = selectedMonth.textValue;
  }
}