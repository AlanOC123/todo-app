import ElementData from "../../../../shared/utils/ElementData";
import editTaskCategoryField from "../editTaskCategory/editTaskCategoryField";
import enableTaskCategoryEdit from "../../utils/enableTaskCategoryEdit";
import editButton from "../../../../shared/components/editButton";

export default function editTaskCategory({ category }) {
  const button = editButton(null);
  button.addEventListener("click", enableTaskCategoryEdit);
  return new ElementData
  (
    "div", 
    "edit-task-card-field edit-task-category", 
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
            ['Category']
          ).renderElement(),
          button,
        ],
      ).renderElement(),
      editTaskCategoryField(category),
    ]
  ).renderElement();
}
