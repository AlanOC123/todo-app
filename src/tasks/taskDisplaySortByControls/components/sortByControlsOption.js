import ElementData from "../../../shared/utils/ElementData";
import tasksState from "../../shared/utils/tasksState";

export default function sortByControlsOption(value) {
  const element = new ElementData(
    "option",
    "",
    {
      value: value,
    },
    [value]
  ).renderElement();

  if (tasksState.sortBy === value) {
    element.selected = true;
  }

  return element;
}
