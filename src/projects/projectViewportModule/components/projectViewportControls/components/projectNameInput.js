import ElementData from "../../../../../shared/utils/ElementData";
import changeProjectName from "../utils/changeProjectName";

export default function projectNameInput()
{
  const element = new ElementData
  (
    'input',
    'change-project-name-input',
    {
      type: 'text',
      min: '2',
      max: '30',
      placeholder: 'Type Project Name',
    },
    []
  ).renderElement();

  function elementChanged()
  {
    changeProjectName(element);
  }

  element.onblur = elementChanged;
  return element;
}