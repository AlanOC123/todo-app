import ElementData from "../../../shared/utils/ElementData";
import iconContainer from '../../../shared/components/icon';
import iconsMap from '../../../shared/utils/iconsMap';

export default function selectCategoryHeader()
{
  const headerIcon = iconContainer(iconsMap.tasks.icon);
  headerIcon.classList.add('select-category-header-icon');

  return new ElementData
  (
    'div',
    'select-category-header',
    {},
    [
      headerIcon,
      new ElementData
      (
        'h3',
        'select-category-header-text',
        {},
        [ 'My Categories' ]
      ).renderElement(),
    ]
  ).renderElement()
}