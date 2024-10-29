import ElementData from "../../../shared/utils/ElementData";

export default function viewportPage(...pages) {
  return new ElementData
  (
    "main",
    "viewport",
    {
      id: "viewport",
    },
    [...pages]
  ).renderElement();
}
