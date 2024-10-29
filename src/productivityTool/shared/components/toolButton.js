import ElementData from "../../../shared/utils/ElementData";

export default function toolButton(...components)
{
  return new ElementData
  (
    'div',
    'productivity-tool',
    {
      id: 'productivity-tool',
    },
    [ 
      ...components
    ]
  ).renderElement()
}