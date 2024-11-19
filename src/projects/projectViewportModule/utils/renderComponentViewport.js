import projectsState from "../../shared/utils/projectsState";
import projectViewportTaskCard from "../components/projectViewportTaskCard/projectViewportTaskCard";

export default function renderComponentViewport(componentClass, viewportElement)
{
  if (!componentClass || !viewportElement)
  {
    return;
  }

  while (viewportElement.firstChild)
  {
    viewportElement.removeChild(viewportElement.firstChild)
  };

  const tasks = componentClass.getComponentTaskList();

  tasks.forEach
  (
    task => viewportElement.append(projectViewportTaskCard(task))
  )
}