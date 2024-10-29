import ElementData from "../utils/ElementData";

export default function header(headerText) {
  return new ElementData
  (
    'h2',
    'section-header',
    {},
    [headerText]
  ).renderElement()
};