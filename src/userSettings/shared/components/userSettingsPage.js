import ElementData from "../../../shared/utils/ElementData";

export default function userSettingsPage(...modules) {
  return new ElementData
  (
    "section",
    "page",
    {
      id: "settings",
    },
    [ ...modules ]
  ).renderElement();
};