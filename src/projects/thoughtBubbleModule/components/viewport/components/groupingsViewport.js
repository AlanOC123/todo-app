import ElementData from "../../../../../shared/utils/ElementData";

export default function groupingsViewport(thoughtCards)
{
  return new ElementData
  (
    'div',
    'grouping-card-viewport',
    {},
    [ ...thoughtCards ]
  ).renderElement();
};