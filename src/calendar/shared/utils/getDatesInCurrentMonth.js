import { format, eachDayOfInterval, startOfMonth, endOfMonth } from "date-fns";
import TimeManager from "../../../shared/utils/timeManager";

export default function getDatesInCurrentMonth(month, year = '2024') {
  let today;
  if (month)
  {
    today = new Date(year, month, 1);
  } else
  {
    today = TimeManager.fullTimeObject;
  }
  const start = startOfMonth(today);
  const end = endOfMonth(today);
  const daysArray = eachDayOfInterval({ start, end });
  const formattedDates = daysArray.map((date) => format(date, "dd-MM-yyyy"));
  return formattedDates;
}
