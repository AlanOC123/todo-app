import ElementData from "../../../shared/utils/ElementData";

export default function projectDetailsHeader()
{
  return new ElementData
  (
    'h2',
    'project-details-header',
    {},
    ['Project Details']
  ).renderElement();
}