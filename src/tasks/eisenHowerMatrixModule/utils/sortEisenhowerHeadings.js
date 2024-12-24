import { differenceInDays } from "date-fns";

export default function sortEisenhowerHeadings(taskArray, sortingHeading) {
  const resultMap = 
  {
    [sortingHeading[0]]: [],
    [sortingHeading[1]]: [],
    [sortingHeading[2]]: [],
    [sortingHeading[3]]: [],
  };

  for (let i = 0; i < taskArray.length; i++) {
    const task = taskArray[i];
    const taskDifficulty = task.getTaskDifficulty();
    const taskPriority = task.getTaskPriority();
    const taskDueDate = task.getTaskDueDate();
    const taskStatus = task.getTaskStatus();
    const referenceDate = new Date();
    const timeRemaining = differenceInDays(taskDueDate, referenceDate);

    const isImportant =
      taskPriority === "High" ||
      (taskPriority === "Medium" && taskDifficulty === "Medium");

    const isNotImportant = (taskPriority ===
      "Low" || (taskPriority === "Medium" && taskDifficulty === "Low"));

    const isUrgent =
      taskStatus === "Overdue" ||
      timeRemaining < 2 ||
      (taskDifficulty === "High" && timeRemaining < 5);

    const isNotUrgent =
      (timeRemaining < 7 && timeRemaining > 3) ||
      (timeRemaining < 5 && taskDifficulty === "Medium");

    if (isImportant && isUrgent) resultMap[sortingHeading[0]].push(task);
    if (isImportant && isNotUrgent) resultMap[sortingHeading[1]].push(task);
    if (isNotImportant && isUrgent) resultMap[sortingHeading[2]].push(task);
    if (isNotImportant && isNotUrgent) resultMap[sortingHeading[3]].push(task);
  }

  return resultMap;
}
