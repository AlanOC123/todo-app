import ElementData from "../../../shared/utils/ElementData";

export default function tasksPage(...modules) {
  return new ElementData
  (
    "section",
    "page",
    {
      id: "tasks",
    },
    [ ...modules ]
  ).renderElement();
};
