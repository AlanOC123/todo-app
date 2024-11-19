import ElementData from '../../../../shared/utils/ElementData';
import changeComponentName from '../../utils/changeComponentName';

export default function projectViewportComponentCardNameInput(component)
{
  const element = new ElementData
  (
    'input',
    'component-name-input',
    {
      type: 'text',
      minlength: '3',
      maxlength: '30',
      placeholder: component.getComponentName() || '',
    },
    []
  ).renderElement();

  function elementChanged()
  {
    changeComponentName(element, component);
  }

  element.onblur = elementChanged;


  return element;
}