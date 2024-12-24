import ElementData from "../../../../../shared/utils/ElementData";
import taskDueDateInput from "./taskDueDateInput";
import iconsMap from "../../../../../shared/utils/iconsMap";
import iconContainer from "../../../../../shared/components/icon";
import { isToday, isYesterday, isTomorrow, differenceInDays } from "date-fns";

export default function taskDueDateDisplay(taskClass) {
  const currentDueDate = taskClass.getTaskDueDate();
  const now = new Date();
  const iconElement = iconContainer(iconsMap.flag.icon, null);
  iconElement.classList.add("task-card-due-date-icon");

  let textDate;

  if (isToday(currentDueDate)) textDate = "Today";
  else if (isYesterday(currentDueDate)) textDate = "Yesterday";
  else if (isTomorrow(currentDueDate)) textDate = "Tomorrow";
  else if (differenceInDays(currentDueDate, now) === 1) textDate = "2 Days";
  else if (differenceInDays(currentDueDate, now) === 2) textDate = "3 Days";
  else textDate = taskClass.getFormattedDueDate();

  const categoryNameElement = new ElementData(
    "p",
    "task-card-due-date-text",
    {},
    [textDate]
  ).renderElement();

  const element = new ElementData("div", "task-card-due-date-display", {}, [
    iconElement,
    categoryNameElement,
  ]).renderElement();

  function elementClicked() {
    element.replaceWith(taskDueDateInput(taskClass));
  }

  element.onclick = elementClicked;

  return element;
}
