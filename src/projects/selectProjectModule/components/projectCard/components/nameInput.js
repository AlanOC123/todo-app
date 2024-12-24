import ElementData from "../../../../../shared/utils/ElementData";
import changeProjectName from "../utils/changeProjectName";

export default function nameInput(projectClass)
{
  const element = new ElementData
  (
    'input',
    'project-card-name-input',
    {
      type: 'text',
      min: '2',
      max: '30',
      placeholder: 'Type Project Name',
    },
    []
  ).renderElement();

  function elementChanged(event)
  {
    event.stopPropagation();
    changeProjectName(element, projectClass);

    if (element.value === '' && projectClass.getProjectName() === 'Type Project Name')
    {
      element.focus();
      return;
    };

    const dueDateInputElement = projectClass.getProjectCard().querySelector('.project-card-due-date-input');

    if (dueDateInputElement)
    {
      dueDateInputElement.showPicker();
    };
  }

  element.onblur = elementChanged;

  return element;
}