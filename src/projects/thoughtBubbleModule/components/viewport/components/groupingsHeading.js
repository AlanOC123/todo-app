import ElementData from "../../../../../shared/utils/ElementData";

export default function groupingsHeading(heading)
{
  return new ElementData
  (
    'div',
    'groupings-header-text-wrapper',
    {},
    [
      new ElementData
      (
        'p',
        'groupings-header-text',
        {},
        [ heading ]
      ).renderElement(),
    ]
  ).renderElement();
};