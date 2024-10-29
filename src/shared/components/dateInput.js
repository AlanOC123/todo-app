import createElement from "../../shared/utils/createElement";
import ElementData from "../../shared/utils/ElementData";
import label from "./label";

export function dateInput(id) {
  return createElement(
    new ElementData(
      "input",
      "date-input",
      {
        id: id,
        name: id,
        type: "date",
      },
      []
    ).createElementData()
  );
}

export function dateContainer(labelFor, labelText) {
  return createElement(
    new ElementData("div", "date-container", {}, [
      label(labelText, labelFor),
      dateInput(labelFor),
    ]).createElementData()
  );
}
