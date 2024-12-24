import ElementData from "../../../shared/utils/ElementData";

export default function selectInput(className, optionsObject, defaultValue)
{
  if (!optionsObject || !className) return;

  function selectOption(option)
  {
    return new ElementData
    (
      'option',
      'select-option',
      { value: option },
      [ option ]
    ).renderElement();
  };

  function optionGroup(heading)
  {
    return new ElementData
    (
      'optgroup',
      'select-heading',
      { label: heading },
      [ heading ]
    ).renderElement();
  }

  const element = new ElementData
  (
    'select',
    className,
    {},
    []
  ).renderElement();


  for (const [, { heading, values }] of Object.entries(optionsObject)) 
  {
    const grouping = optionGroup(heading);
    values.forEach(value => grouping.append(selectOption(value)))
    element.append(grouping);
  }

  element.value = defaultValue;

  return element;
}