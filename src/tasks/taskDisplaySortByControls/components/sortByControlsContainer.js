import ElementData from "../../../shared/utils/ElementData";

export default function sortByControlsContainer(...components) {
  return new ElementData("div", "sort-by-controls", {}, [
    ...components,
  ]).renderElement();
}
