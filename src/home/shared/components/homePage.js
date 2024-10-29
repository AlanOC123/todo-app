import ElementData from "../../../shared/utils/ElementData";

export default function homePage(...modules) {
  return new ElementData
  (
    "section",
    "page",
    {
      id: "home",
    },
    [ ...modules ]
  ).renderElement();
};