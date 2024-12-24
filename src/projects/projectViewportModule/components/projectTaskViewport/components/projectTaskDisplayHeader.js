import ElementData from "../../../../../shared/utils/ElementData";
import iconContainer from "../../../../../shared/components/icon";
import iconsMap from "../../../../../shared/utils/iconsMap";

export default function projectTaskDisplayHeader()
{
  const timerIcon = iconContainer(iconsMap.timer.icon, null);
  const deleteIcon = iconContainer(iconsMap.delete.icon, null);
  timerIcon.classList.add('project-task-duration-header');
  deleteIcon.classList.add('project-task-delete-header');

  return new ElementData
  (
    'div',
    'project-task-viewport-header',
    {},
    [
      new ElementData
      (
        'p',
        'project-task-complete-header',
        {},
        [ 'Complete' ]
      ).renderElement(),
      new ElementData
      (
        'p',
        'project-task-name-header',
        {},
        [ 'Title' ]
      ).renderElement(),
      new ElementData
      (
        'p',
        'project-task-priority-header',
        {},
        [ 'Priority' ]
      ).renderElement(),
      timerIcon,
      deleteIcon,
    ]
  ).renderElement();
}