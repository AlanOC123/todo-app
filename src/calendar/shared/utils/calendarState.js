const currentDate = new Date();

const calendarState =
{
  currentYear: currentDate.getFullYear(),
  currentMonth: currentDate.getMonth(),
  currentDay: currentDate.getDate(),
  daysArray: [],
}

export default calendarState;