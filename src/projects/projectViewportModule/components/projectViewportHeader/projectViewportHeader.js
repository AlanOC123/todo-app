import ElementData from "../../../../shared/utils/ElementData";
import projectInformation from "./components/projectinformation";
import componentInformation from "./components/componentInformation";

export default function projectViewportHeader()
{
  return new ElementData
  (
    'div',
    'project-viewport-header',
    {},
    [
      projectInformation(),
      componentInformation(),
    ]
  ).renderElement();
};