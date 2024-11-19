import projectsState from "../../shared/utils/projectsState";
import selectProjectCardNameDisplay from "../components/selectProjectCardNameDisplay";

export default function setProjectName(inputElement)
{
  const selectedProject = projectsState.getSelectedProject()

  if (!selectedProject)
  {
    return;
  }

  if (!inputElement.value)
  {
    inputElement.replaceWith(selectProjectCardNameDisplay(selectedProject.getProjectName()))
    return;
  }

  selectedProject.setProjectName(inputElement.value);

  inputElement.replaceWith(selectProjectCardNameDisplay(selectedProject.getProjectName()));
}