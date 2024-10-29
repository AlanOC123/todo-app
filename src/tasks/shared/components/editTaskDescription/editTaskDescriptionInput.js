import ElementData from "../../../../shared/utils/ElementData";
import enableTaskDescriptionEdit from "../../../shared/utils/enableTaskDescriptionEdit";

export default function editTaskDescriptionInput() {
  const element = new ElementData(
    "textarea",
    "edit-task-description-input",
    {
      maxlength: '200',
      rows: '2',
      cols: '25',
      type: "text",
      placeholder: "Type Task Description",
    },
    []
  ).renderElement();

  element.addEventListener('blur', enableTaskDescriptionEdit);

  return element;
}
