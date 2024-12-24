import renameProjectButton from "../components/renameProjectButton";
import projectsState from "../../../../shared/utils/projectsState";

export default function changeProjectName(inputElement)
{
  const currentProject = projectsState.getActiveProject();
  if (!currentProject || !inputElement)
  {
    inputElement.replaceWith(renameProjectButton());
    return;
  };

  currentProject.setProjectName(inputElement.value);
  inputElement.replaceWith(renameProjectButton());
}