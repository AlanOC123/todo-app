import ElementData from "../../../../../shared/utils/ElementData";
import createTaskCard from './createTaskCard';

export default function taskGroupingsCardFooter()
{
  return new ElementData
  (
    'div',
    'task-groupings-card-footer',
    {},
    [ createTaskCard() ]
  ).renderElement()
}