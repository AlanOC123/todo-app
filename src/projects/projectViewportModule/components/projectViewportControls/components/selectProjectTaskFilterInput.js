import ElementData from "../../../../../shared/utils/ElementData";
import changeFilter from "../utils/changeProjectTaskFilter";

export default function selectTaskFilterInput()
{
  function optionElement(option)
  {
    return new ElementData
    (
      'option',
      'task-filter-option',
      { value: option },
      [ option ]
    ).renderElement();
  };

  const options = ['--Select Filter--', 'All Tasks', 'Complete Tasks', 'In-Complete Tasks', 'High Priority Tasks', 'Medium Priority Tasks', 'Low Priority Tasks'].map
  (
    option => optionElement(option)
  );

  const element = new ElementData
  (
    'select',
    'task-filter-select',
    {},
    []
  ).renderElement();

  options.forEach
  (
    option =>
    {
      element.append(option);
      if (option.value === '--Select Filter--') element.value = option.value;
    }
  );

  function elementChanged()
  {
    changeFilter(element);
  }

  element.onchange = elementChanged;

  return element;
}