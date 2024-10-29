import ElementData from "../../../../shared/utils/ElementData";
import editTaskDateField from "./editTaskDateField";
import enableTaskDateEdit from "../../utils/enableTaskDateEdit";
import editButton from "../../../../shared/components/editButton";

export default function editTaskDate({ dueDate }) {
  const button = editButton(null);

  button.addEventListener("click", enableTaskDateEdit);
  return new ElementData
  (
    "div", 
    "edit-task-card-field edit-task-date", 
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
            ['Due Date']
          ).renderElement(),
          button,
        ],
      ).renderElement(),
      editTaskDateField(dueDate),
    ]
  ).renderElement();
}
