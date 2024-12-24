import ElementData from "../../../../../shared/utils/ElementData";
import changeProjectTaskName from "../utils/changeProjectTaskName";

export default function projectTaskCardNameInput(projectTaskClass)
{
  const element = new ElementData
  (
    'input',
    'project-task-card-name-input',
    {
      type: 'text',
      min: '2',
      max: '30',
      placeholder: projectTaskClass.getTaskName()
    },
    []
  ).renderElement();

  function elementBlurred()
  {
    changeProjectTaskName(element, projectTaskClass);

    if (projectTaskClass.getTaskName() === 'Type Task Name') return;

    const priorityInputElement = projectTaskClass.getTaskCard().querySelector('.project-task-card-priority-input');

    if (priorityInputElement) priorityInputElement.showPicker();
  }

  element.onblur = elementBlurred;
  return element;
}