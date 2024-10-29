import ElementData from "../../../../shared/utils/ElementData";
import editTaskTitleField from "./editTaskTitleField";
import enableTaskTitleEdit from "../../utils/enableTaskTitleEdit";
import editButton from "../../../../shared/components/editButton";

export default function editTaskTitle({ title }) {
  const button = editButton(null);
  button.addEventListener("click", enableTaskTitleEdit);

  return new ElementData("div", "edit-task-card-field edit-task-title", {}, [
    new ElementData("div", "edit-task-field-container", {}, [
      new ElementData("p", "edit-task-field-label", {}, [
        "Title",
      ]).renderElement(),
      button,
    ]).renderElement(),
    editTaskTitleField(title),
  ]).renderElement();
}
