import ElementData from '../../../shared/utils/ElementData';

export default function toolControls(...nodes)
{
  return new ElementData
  (
    'div',
    'productivity-tool-controls',
    {},
    [
      ...nodes
    ]
  ).renderElement();
}