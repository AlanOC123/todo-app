import ElementData from "../../../../shared/utils/ElementData";

export default function editTaskDescriptionField(description) {
  return new ElementData("p", "edit-task-description-field", {}, [
    description,
  ]).renderElement();
}
