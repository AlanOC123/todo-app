import ElementData from "../../utils/ElementData";

export default function card()
{
  return new ElementData
  (
    'div',
    'card',
    {},
    []
  ).renderElement();
};
