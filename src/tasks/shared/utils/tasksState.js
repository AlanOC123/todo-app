import timeManager from "../../../shared/utils/timeManager";

const tasksState = {
  date: timeManager.formatTimeStamp(timeManager.fullTimeObject),
  dateSelected: timeManager.formatTimeStamp(timeManager.fullTimeObject),
  day: timeManager.day,
  daySelected: timeManager.day,
  sortBy: "all-tasks",
};

export default tasksState;
