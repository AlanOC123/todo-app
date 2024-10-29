import ElementData from "../../../../shared/utils/ElementData";

export default function editTaskStatusField(status) {
  return new ElementData("div", "edit-task-status-container", {}, [
    new ElementData("p", "edit-task-status-field", {}, [
      status,
    ]).renderElement(),
  ]).renderElement();
}
