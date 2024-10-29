import ElementData from "../../../../shared/utils/ElementData";
import editTaskStatusField from "../editTaskStatus/editTaskStatusField";
import enableTaskStatusEdit from "../../utils/enableTaskStatusEdit";
import editButton from "../../../../shared/components/editButton";

export default function editTaskCategory({ status }) {
  const button = editButton(null);
  button.addEventListener("click", enableTaskStatusEdit);
  return new ElementData
  (
    "div", 
    "edit-task-card-field edit-task-status", 
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
            ['Status']
          ).renderElement(),
          button,
        ],
      ).renderElement(),
      editTaskStatusField(status),
    ]
  ).renderElement();
}
