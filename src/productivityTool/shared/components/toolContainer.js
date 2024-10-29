import ElementData from "../../../shared/utils/ElementData";

export default function toolContainer(...components)
{
  return new ElementData
  (
    'div',
    'productivity-tool-container',
    {
      id: 'productivity-tool',
      'data-state': 'inactive',
    },
    [ ...components ]
  ).renderElement()
}