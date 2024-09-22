import applyTheme from "../stateManagement/common/applyTheme";

export default class TimeData {
  constructor() {
    this.minute = null;
    this.hour = null;
    this.date = null;
    this.month = null;
    this.day = null;
    this.theme = null;

    this.updateTime();
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
    const currentTheme = this.theme;
    this.theme = this.updateTheme();

    if (currentTheme !== this.theme) {
      applyTheme({ theme: null, time: this.theme })
    }
  };

  updateTheme = () => {
    const hour = parseInt(this.hour);
    return hour >= 8 && hour < 20 ? "light" : "dark";
  };
}
