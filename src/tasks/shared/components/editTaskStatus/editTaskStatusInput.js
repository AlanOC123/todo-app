import ElementData from "../../../../shared/utils/ElementData";
import taskCardValues from "../../../shared/utils/taskValues";
import enableTaskStatusEdit from "../../../shared/utils/enableTaskStatusEdit";

export default function editTaskStatusInput() {
  const options = taskCardValues.status.textHeadings;
  const element = new ElementData(
    "select",
    "edit-task-status-input",
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

  element.addEventListener('change', enableTaskStatusEdit);

  return element;
}
