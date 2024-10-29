import createElement from "../../utils/classes/createElement";
import ElementData from "../../utils/classes/ElementData";

export function descriptionInput(id, rows, cols, maxlength) {
  return createElement(
    (
      new ElementData(
        "textarea",
        '',
        {
          id: id,
          rows: rows,
          cols: cols,
          maxlength: maxlength,
        },
        []
      ).createElementData()
    )
  );
};