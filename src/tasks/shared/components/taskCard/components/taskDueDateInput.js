import ElementData from "../../../../../shared/utils/ElementData";
import changeTaskDueDate from "../utils/changeTaskDueDate";
import changeDueDateInputElement from "../utils/changeDueDateInputElement";
import taskViewportEventManager from "../../../../tasksViewportModule/events/taskViewportEventsManager";
import taskViewportEvents from "../../../../tasksViewportModule/events/taskViewportEvents";

export default function taskDueDateInput(taskClass) {
  const element = new ElementData(
    "input",
    "task-card-due-date-input",
    {
      type: "date",
      min: new Date().toISOString().split("T")[0],
      value: new Date().toISOString().split("T")[0],
    },
    []
  ).renderElement();

  function elementChanged() {
    changeTaskDueDate(element, taskClass);
  }

  function dueDateChanged({ task }) {
    if (task !== taskClass) return;
    changeDueDateInputElement(element, taskClass);
  }

  taskViewportEventManager.on(
    taskViewportEvents.taskDueDateChanged,
    dueDateChanged
  );

  element.onchange = elementChanged;

  return element;
}
