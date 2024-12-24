import ElementData from "../../../../../shared/utils/ElementData";
import changeProjectComponentName from "../utils/changeProjectComponentName";

export default function projectComponentNameInput()
{
  const element = new ElementData
  (
    'input',
    'change-project-component-name-input',
    {
      type: 'text',
      min: '2',
      max: '30',
      placeholder: 'Type Component Name',
    },
    []
  ).renderElement();

  function elementChanged()
  {
    changeComponentName(element);
  }

  element.onblur = elementChanged;
  return element;
}