import ElementData from "../../../../../shared/utils/ElementData";
import nameDisplay from "./nameDisplay";
import dueDateDisplay from './dueDateDisplay';
import deleteButton from "./deleteButton";

export default function informationDisplay(projectClass)
{
  return new ElementData
  (
    'div',
    'project-card-data',
    {},
    [
      new ElementData
      (
        'div',
        'project-card-info',
        {},
        [
          nameDisplay(projectClass),
          dueDateDisplay(projectClass),
        ]
      ).renderElement(),
      deleteButton(projectClass),
    ]
  ).renderElement();
}
