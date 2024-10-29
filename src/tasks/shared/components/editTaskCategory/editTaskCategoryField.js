import ElementData from "../../../../shared/utils/ElementData";

export default function editTaskCategoryField(category) {
  return new ElementData("div", "edit-task-category-container", {}, [
    new ElementData("p", "edit-task-category-field", {}, [
      category,
    ]).renderElement(),
  ]).renderElement();
}
