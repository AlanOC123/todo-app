import { dropdownMenu } from "../../../shared/components/dropDownMenu";
import sortByControlsOption from "./sortByControlsOption";
import taskValues from '../../shared/utils/taskValues';
import changeSortByValue from "../events/changeSortByValue";

export default function sortByControlsDropDown() {
  const options = Object.keys(taskValues).map
  (
    option => taskValues[option].sortByText
  )

  const element = dropdownMenu("sort-by-controls-menu");

  element.addEventListener
  ('change', 
    () => changeSortByValue(element.value)
  );

  const nodes = options.map((item) => sortByControlsOption(item));

  nodes.forEach((node) => element.append(node));

  return element;
}
