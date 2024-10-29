import ElementData from "../../../shared/utils/ElementData";

export default function calendarPage(...modules) {
  return new ElementData
  (
    "section",
    "page",
    {
      id: "calendar",
    },
    [ ...modules ]
  ).renderElement();
};