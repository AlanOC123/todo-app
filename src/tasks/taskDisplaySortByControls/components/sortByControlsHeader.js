import ElementData from "../../../shared/utils/ElementData";

export default function sortByControlsHeader() {
  return new ElementData("p", "sort-by-controls-header", {}, [
    "Sort By",
  ]).renderElement();
}
