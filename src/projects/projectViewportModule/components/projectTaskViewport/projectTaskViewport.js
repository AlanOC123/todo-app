import ElementData from "../../../../shared/utils/ElementData";
import projectTaskDisplayHeader from "./components/projectTaskDisplayHeader";
import projectTaskDisplay from "./components/projectTaskDisplay";

export default function projectViewport()
{
  return new ElementData
  (
    'div',
    'project-task-viewport-display',
    {},
    [
      projectTaskDisplayHeader(),
      projectTaskDisplay(),
    ]
  ).renderElement();
}