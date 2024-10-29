import ElementData from "../../../shared/utils/ElementData";

export default function projectsPage(...modules) {
  return new ElementData
  (
    "section",
    "page",
    {
      id: "projects",
    },
    [ ...modules ]
  ).renderElement();
};