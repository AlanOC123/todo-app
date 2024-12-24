import ElementData from "../../../../../shared/utils/ElementData";

export default function projectNameLabel()
{
  return new ElementData
  (
    'p',
    'project-name-label',
    {},
    [ 'Project' ]
  ).renderElement();
}