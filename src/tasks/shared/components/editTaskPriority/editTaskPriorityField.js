import ElementData from "../../../../shared/utils/ElementData";

export default function editTaskPriorityField(priority) {
  return new ElementData("div", "edit-task-priority-container", {}, [
    new ElementData("p", "edit-task-priority-field", {}, [
      priority,
    ]).renderElement(),
  ]).renderElement();
}
