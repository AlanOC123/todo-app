import ElementData from "../../../../shared/utils/ElementData";
import taskCardValues from "../../../shared/utils/taskValues";
import enableTaskCategoryEdit from "../../utils/enableTaskCategoryEdit";

export default function editTaskCategoryInput() {
  const options = taskCardValues.category.textHeadings;
  const element = new ElementData(
    "select",
    "edit-task-category-input",
    {},
    []
  ).renderElement();

  options.forEach((item) => {
    element.append(
      new ElementData(
        "option",
        "",
        {
          value: item,
        },
        [item]
      ).renderElement()
    );
  });

  element.addEventListener('change', enableTaskCategoryEdit);

  return element;
}
