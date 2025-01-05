import ElementData from "../../utils/ElementData";

export default function textInput(placeholderVal)
{
  return new ElementData
  (
    'input',
    'text-input',
    {
      type: text,
      min: 2,
      max: 30,
      placeholder: placeholderVal
    },
    []
  ).renderElement();
}
