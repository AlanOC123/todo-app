import ElementData from "../../../../shared/utils/ElementData";
import editTaskPriorityField from "../editTaskPriority/editTaskPriorityField";
import enableTaskPriorityEdit from "../../utils/enableTaskPriorityEdit";
import editButton from "../../../../shared/components/editButton";

export default function editTaskPriority({ priority }) {
  const button = editButton(null);
  button.addEventListener("click", enableTaskPriorityEdit);
  return new ElementData
  (
    "div", 
    "edit-task-card-field edit-task-priority", 
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
            ['Priority']
          ).renderElement(),
          button,
        ],
      ).renderElement(),
      editTaskPriorityField(priority),
    ]
  ).renderElement();
}
