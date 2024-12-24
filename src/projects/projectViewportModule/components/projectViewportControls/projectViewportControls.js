import ElementData from "../../../../shared/utils/ElementData";
import renameProjectButton from "./components/renameProjectButton";
import renameComponentButton from "./components/renameComponentButton";
import changeProjectDueDateButton from "./components/changeProjectDueDateButton";
import addProjectTaskButton from "./components/addProjectTaskButton";
import projectTaskFilterButton from "./components/projectTaskFilterButton";

export default function projectViewportControls()
{
  return new ElementData
  (
    'div',
    'project-viewport-controls',
    {},
    [
      addProjectTaskButton(),
      renameProjectButton(),
      renameComponentButton(),
      changeProjectDueDateButton(),
      projectTaskFilterButton(),
    ]
  ).renderElement();
}