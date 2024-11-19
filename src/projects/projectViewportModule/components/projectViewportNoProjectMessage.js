import ElementData from "../../../shared/utils/ElementData";

export default function projectViewportNoProjectMessage()
{
  return new ElementData
  (
    'h2',
    'no-project-message',
    {},
    ['No Projects']
  ).renderElement();
}