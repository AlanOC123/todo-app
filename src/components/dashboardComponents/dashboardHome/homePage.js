import createElement from "../../../utils/classes/createElement";
import ElementData from "../../../utils/classes/ElementData";
import homeHeader from "./homeHeader";
import homeGrid from "./homeGrid";

export default function homePage() {
  const containerData = new ElementData(
    "div",
    "home",
    {
      id: "home",
    },
    [
      homeHeader(),
      homeGrid()
    ]
  ).createElementData();

  return createElement(containerData);
};