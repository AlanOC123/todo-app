import ElementData from "../../../../../shared/utils/ElementData";
import projectsState from "../../../../shared/utils/projectsState";
import ProjectTaskClass from "../../../../shared/utils/ProjectTaskClass";
import projectTaskCardNameInput from "../../projectTaskCard/components/projectTaskCardNameInput";
import projectTaskCardPriorityInput from "../../projectTaskCard/components/projectTaskCardPriorityInput";

export default function addProjectTaskButton()
{
  const element = new ElementData
  (
    'button',
    'add-project-task-button',
    {},
    ['Create Task']
  ).renderElement();

  function elementClicked()
  {
    const activeProject = projectsState.getActiveProject();
    const activeComponent = projectsState.getActiveComponent();
    if (!activeProject || !activeComponent) return;

    const newTask = new ProjectTaskClass(activeComponent);
    const taskCard = newTask.getTaskCard();
    activeComponent.addTask(newTask);

    const viewportFilter = activeComponent.getComponentTaskFilter();

    console.log(viewportFilter);

    const taskNameElement = taskCard.querySelector('.project-task-card-name');
    const nameInputElement = projectTaskCardNameInput(newTask);
    taskNameElement.replaceWith(nameInputElement);
    nameInputElement.focus();

    if (viewportFilter === 'All Tasks')
    {
      const taskPriorityElement = taskCard.querySelector('.project-task-card-priority');
      const priorityInputElement = projectTaskCardPriorityInput(newTask);
  
      taskPriorityElement.replaceWith(priorityInputElement);
      return;
    };

    if (viewportFilter === 'Complete Tasks')
    {
      newTask.setIsTaskComplete(true);

      const taskPriorityElement = taskCard.querySelector('.project-task-card-priority');
      const priorityInputElement = projectTaskCardPriorityInput(newTask);
  
      taskPriorityElement.replaceWith(priorityInputElement);
      return;
    };

    if (viewportFilter === 'In-Complete Tasks')
    {
      newTask.setIsTaskComplete(false);

      const taskPriorityElement = taskCard.querySelector('.project-task-card-priority');
      const priorityInputElement = projectTaskCardPriorityInput(newTask);
  
      taskPriorityElement.replaceWith(priorityInputElement);
      return;
    };

    if (viewportFilter === 'High Priority Tasks')
    {
      newTask.setTaskPriority('High');
      return;
    };

    if (viewportFilter === 'Medium Priority Tasks')
    {
      newTask.setTaskPriority('Medium');
      return;
    };

    if (viewportFilter === 'Low Priority Tasks')
    {
      newTask.setTaskPriority('Low');
      return;
    };
  }

  element.onclick = elementClicked;
  return element;
}