import ElementData from "../../../../shared/utils/ElementData";
import enableTaskTitleEdit from "../../../shared/utils/enableTaskTitleEdit";

export default function editTaskTitleInput() {
  const element = new ElementData(
    "input",
    "edit-task-title-input",
    {
      maxlength: 50,
      minlength: 3,
      type: "text",
      placeholder: "Type Task Title",
    },
    []
  ).renderElement();

  element.addEventListener("blur", enableTaskTitleEdit);
  return element;
}
