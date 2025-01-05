import ElementData from "../../utils/ElementData";

export default function textElement(text)
{
  return new ElementData
  (
    'p',
    'text-element',
    {},
    [text]
  ).renderElement();
};
