import ElementData from "../../../../shared/utils/ElementData";
import enableTaskDateEdit from "../../../shared/utils/enableTaskDateEdit";

export default function editTaskDateInput() {
  const element = new ElementData(
    "input",
    "edit-task-date-input",
    {
      min: new Date().toISOString().split("T")[0],
      type: "date",
    },
    []
  ).renderElement();

  element.addEventListener('change', enableTaskDateEdit);
  return element;
}
