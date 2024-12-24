import ElementData from "../../../../../shared/utils/ElementData";
import changeProjectTaskPriority from "../utils/changeProjectTaskPriority";

export default function projectTaskCardPriorityInput(projectTaskClass)
{
  function selectOptionElement(option)
  {
    return new ElementData
    (
      'option',
      'project-task-card-priority-input-option',
      {
        value: option,
      },
      [ option ]
    ).renderElement();
  };

  const options = ['--Select Priority--' ,'Low', 'Medium', 'High'].map
  (
    option => selectOptionElement(option)
  );

  const element = new ElementData
  (
    'select',
    'project-task-card-priority-input',
    {},
    [options]
  ).renderElement();

  options.forEach
  (
    option =>
    {
      element.append(option);
      if (option.value === '--Select Priority--') element.value = option.value;
    }
  );

  function elementChanged()
  {
    changeProjectTaskPriority(element, projectTaskClass);
  };

  element.onchange = elementChanged;

  return element;
}