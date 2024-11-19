import ElementData from "../../../../shared/utils/ElementData";

export default function projectDetailsCardLabel(labelText)
{
  const element = new ElementData
  (
    'p',
    'project-details-card-label',
    {},
    [labelText]
  ).renderElement();

  return element;
}