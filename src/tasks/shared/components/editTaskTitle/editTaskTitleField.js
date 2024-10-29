import ElementData from "../../../../shared/utils/ElementData";

export default function editTaskTitleField(title) {
  return new ElementData("p", "edit-task-title-field", {}, [
    title,
  ]).renderElement();
}
