import ElementData from '../../../../../shared/utils/ElementData';
import addThought from '../utils/addThought';
import projectsState from '../../../../shared/utils/projectsState';

export default function textArea()
{
  const element = new ElementData
  (
    'textarea',
    'thought-bubble-text-input',
    {
      placeholder: 'Type your Thoughts...'
    },
    [],
  ).renderElement();

  function elementEntered()
  {
    const activeProject = projectsState.getActiveProject();

    if (!activeProject) return;

    document.addEventListener
    (
      'keydown', e =>
      {
        if (e.key === 'Enter' && !e.shiftKey)
        { 
          e.stopPropagation();
          e.preventDefault();
          addThought();
        };
      }
    )
  }

  element.onfocus = elementEntered;

  return element;
}