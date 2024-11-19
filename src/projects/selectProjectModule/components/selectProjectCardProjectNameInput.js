import ElementData from "../../../shared/utils/ElementData";
import setProjectName from "../utils/setProjectName";

export default function selectProjectCardProjectNameInput(projectName)
{
  const element = new ElementData
  (
    'input',
    'select-project-card-name-input',
    {
      type: 'text',
      minlength: 2,
      maxlength: 40,
      placeholder: projectName,
    },
    []
  ).renderElement();

  function elementChanged()
  {
    setProjectName(element);
  }

  element.onblur = elementChanged;

  return element;
}