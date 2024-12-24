import ElementData from "../../../shared/utils/ElementData";
import iconContainer from "../../../shared/components/icon";
import iconsMap from "../../../shared/utils/iconsMap";

export default function selectProjectHeader()
{
  const folderIcon = iconContainer(iconsMap.folder.icon, null);

  return new ElementData
  (
    'div',
    'select-project-header',
    {},
    [
      folderIcon,
      new ElementData
      (
        'h3',
        'select-project-header-text',
        {},
        [ 'My Projects' ]
      ).renderElement(),
    ]
  ).renderElement();
}