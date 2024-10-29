import ElementData from "../../../../shared/utils/ElementData";
import editTaskDescriptionField from "./editTaskDescriptionField";
import enableTaskDescriptionEdit from "../../utils/enableTaskDescriptionEdit";
import editButton from "../../../../shared/components/editButton";

export default function editTaskDescription({ description }) {
  const button = editButton(null);
  button.addEventListener("click", enableTaskDescriptionEdit);
  return new ElementData
  (
    "div", 
    "edit-task-card-field edit-task-description", 
    {}, 
    [
      new ElementData
      (
        'div',
        'edit-task-field-container',
        {},
        [
          new ElementData
          (
            'p',
            'edit-task-field-label',
            {},
            ['Description']
          ).renderElement(),
          button,
        ],
      ).renderElement(),
      editTaskDescriptionField(description),
    ]
  ).renderElement();
}
