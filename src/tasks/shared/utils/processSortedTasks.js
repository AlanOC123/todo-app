import TimeManager from "../../../shared/utils/TimeManager";

export default function processSortedTasks(
  tasksArray,
  sortByArray,
  sortByOption,
  daySelected
) {
  sortByOption = sortByOption ?? "none";
  const date = TimeManager.getDateDifference(daySelected);
  const todaysTasks = tasksArray.filter((task) => {
    return task.dueDate === date;
  });

  const sortedArray = [];

  if (sortByOption === "none") {
    sortedArray.push({ "All Tasks": todaysTasks });
    return sortedArray;
  }

  sortByArray.forEach((option) => {
    const sortedObject = {};

    sortedObject[option] = [];

    todaysTasks.forEach((task) => {
      if (task[sortByOption] === option) {
        sortedObject[option].push(task);
      }
    });
    sortedArray.push(sortedObject);
  });

  return sortedArray;
}
