import ElementData from "../../../../../shared/utils/ElementData";
import changeComponentName from "../utils/changeComponentName";

export default function nameInput(componentClass)
{
  const element = new ElementData
  (
    'input',
    'component-card-name-input',
    {
      type: 'text',
      min: '2',
      max: '30',
      placeholder: componentClass.getComponentName(),
    },
    []
  ).renderElement();

  function elementChanged()
  {
    if (!element.value || !element.checkValidity())
    {
      element.focus();
      element.classList.add('error');
      return;
    };

    changeComponentName(element, componentClass);
  }

  element.onblur = elementChanged;
  return element;
}