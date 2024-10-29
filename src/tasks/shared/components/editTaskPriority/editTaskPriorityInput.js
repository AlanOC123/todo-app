import ElementData from "../../../../shared/utils/ElementData";
import taskCardValues from "../../../shared/utils/taskValues";
import enableTaskPriorityEdit from "../../../shared/utils/enableTaskPriorityEdit";

export default function editTaskPriorityInput() {
  const options = taskCardValues.priority.textHeadings;
  const element = new ElementData(
    "select",
    "edit-task-priority-input",
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

  element.addEventListener('change', enableTaskPriorityEdit);

  return element;
}
