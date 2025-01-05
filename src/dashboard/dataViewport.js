import ElementData from "../utils/ElementData";

export default function dataViewport()
{
  const element = new ElementData
  (
    "main",
    "data-viewport",
    {
      id: "data-viewport",
    },
    []
  ).renderElement();

  return element;
}
