import ElementData from '../../../../../shared/utils/ElementData';
import iconsMap from '../../../../../shared/utils/iconsMap';
import iconContainer from '../../../../../shared/components/icon';
import projectsState from '../../../../shared/utils/projectsState';

export default function deleteThoughtButton(thoughtClass)
{
  const buttonIcon = iconContainer(iconsMap.delete.icon, null);

  const element = new ElementData
  (
    'div',
    'delete-thought-button',
    {},
    [ buttonIcon ]
  ).renderElement();

  function elementClicked()
  {
    const activeProject = projectsState.getActiveProject();

    if (!activeProject) return;

    const parentProject = thoughtClass.getThoughtParentProject();

    if (activeProject !== parentProject) return;

    parentProject.deleteThought(thoughtClass);
  }

  element.onclick = elementClicked;

  return element;
}