import ElementData from "../../../../../shared/utils/ElementData";
import groupingsHeading from "./groupingsHeading";
import groupingsViewport from "./groupingsViewport";

export default function groupingsCard(heading, thoughtCards)
{
  return new ElementData
  (
    'div',
    'groupings-card',
    {},
    [
      groupingsHeading(heading),
      groupingsViewport(thoughtCards)
    ]
  ).renderElement();
}