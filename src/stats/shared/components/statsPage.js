import ElementData from "../../../shared/utils/ElementData";

export default function statsPage(...modules) {
  return new ElementData
  (
    "section",
    "page",
    {
      id: "stats",
    },
    [ ...modules ]
  ).renderElement();
};