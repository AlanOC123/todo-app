import { keyMap, valueMap } from "./taskValueMap";

export default function sortTasks(sortingObject, taskList) {
  let [[sortByHeading, sortByValue]] = Object.entries(sortingObject);

  const noSorts = sortByHeading === "All";

  const { sortingValues, colorScheme } = keyMap[sortByHeading];

  let sortedHeadings = noSorts ? ["All"] : Object.keys(sortingValues);

  const resultMap = {
    sortedHeadings,
    colorScheme,
    sortedTasks: { All: [], Draft: [] },
  };

  for (let i = 0; i < taskList.length; i++) {
    const task = taskList[i];
    if (task.getIsTaskEditing()) {
      if (!sortedHeadings.includes("Draft") && noSorts)
        sortedHeadings.push("Draft");
      resultMap.sortedTasks["Draft"].push(task);
    } else resultMap.sortedTasks["All"].push(task);
  }

  if (noSorts || !Array.isArray(taskList)) return resultMap;

  resultMap.sortedTasks = {};

  let sortingOrderKey;

  for (const heading in valueMap) {
    if (valueMap[heading].includes(sortByValue)) sortingOrderKey = heading;
  }

  sortedHeadings = sortedHeadings.sort((headingA, headingB) => {
    const valueA = sortingValues[headingA];
    const valueB = sortingValues[headingB];

    if (sortingOrderKey === "Ascending") return valueA - valueB;
    else if (sortingOrderKey === "Descending") return valueB - valueA;
    else return 0;
  });

  const draftTasksPresent =
    taskList.find((task) => task.getIsTaskEditing()) || null;

  if (draftTasksPresent) sortedHeadings.push("Draft");

  for (let i = 0; i < taskList.length; i++) {
    const task = taskList[i];
    const { sortedTasks } = resultMap;
    let taskProp = task[`getTask${sortByHeading}`]();

    if (task.getIsTaskEditing()) taskProp = "Draft";
    sortedTasks[taskProp] = sortedTasks[taskProp] || [];
    sortedTasks[taskProp].push(task);
  }

  return resultMap;
}
