import ElementData from "../../shared/utils/ElementData";

export default function label(labelText, labelFor) {
  return new ElementData
  (
      "label",
      "",
      {
        for: labelFor,
      },
      [labelText]
  ).renderElement()
}
