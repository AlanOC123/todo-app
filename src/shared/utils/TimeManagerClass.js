import applyTheme from "./applyTheme";
import { subDays, addDays, format } from "date-fns";

export default class TimeManagerClass {
  constructor() {
    this.minute = null;
    this.hour = null;
    this.date = null;
    this.month = null;
    this.day = null;

    this.unformattedMinute = null;
    this.unformattedHour = null;
    this.unformattedDate = null;
    this.monthIndex = null;
    this.dayIndex = null;
    this.fullTimeObject = null;

    this.updateTime();
    applyTheme();
  }

  daysMap = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  monthMap = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  updateTime = () => {
    const currentTime = new Date();
    this.minute = currentTime.getMinutes().toString().padStart(2, "0");
    this.hour = currentTime.getHours().toString().padStart(2, "0");
    this.date = currentTime.getDate().toString().padStart(2, "0");
    this.month = this.monthMap[currentTime.getMonth()];
    this.day = this.daysMap[currentTime.getDay()];

    this.unformattedMinute = currentTime.getMinutes();
    this.unformattedHour = currentTime.getHours();
    this.unformattedDate = currentTime.getDate();
    this.monthIndex = currentTime.getMonth();
    this.dayIndex = currentTime.getDay();
    this.fullTimeObject = currentTime;
  };

  getFullDay = (day) => {
    const map = {
      Sun: "Sunday",
      Mon: "Monday",
      Tue: "Tuesday",
      Wed: "Wednesday",
      Thu: "Thursday",
      Fri: "Friday",
      Sat: "Saturday",
    };

    if (day) {
      if (map[day]) {
        return map[day];
      } else {
        return null;
      }
    } else {
      return null;
    }
  };

  getDateDifference = (chosenDay) => {
    const map = {
      Sun: 1,
      Mon: 2,
      Tue: 3,
      Wed: 4,
      Thu: 5,
      Fri: 6,
      Sat: 7,
    };

    let date;

    const currentDayIndex = Number(this.dayIndex) + 1;
    const chosenDayIndex = map[chosenDay];

    const difference = chosenDayIndex - currentDayIndex;

    if (difference > 0) {
      date = addDays(this.fullTimeObject, difference);
    } else {
      date = subDays(this.fullTimeObject, Math.abs(difference));
    }

    return format(date, "dd-MM-yyyy");
  };

  formatTimeStamp = (dateChosen) => {
    const unformattedDate = new Date(dateChosen);
    return format(unformattedDate, "dd-MM-yyyy");
  };
}
