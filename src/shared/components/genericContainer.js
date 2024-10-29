import createElement from "../../utils/classes/createElement";
import ElementData from "../../utils/classes/ElementData";

export default function genericContainer(...children) {
  return createElement(
    (
      new ElementData(
        'div',
        '',
        {},
        [ ...children ]
      ).createElementData()
    )
  );
};