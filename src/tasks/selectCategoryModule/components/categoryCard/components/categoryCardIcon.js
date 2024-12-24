import iconContainer from '../../../../../shared/components/icon';
import ElementData from '../../../../../shared/utils/ElementData';
import selectCategoryEventsManager from '../../../events/selectCategoryEventsManager';
import selectCategoryEvents from '../../../events/selectCategoryEvents';

export default function categoryCardIcon(categoryClass)
{
  const element = new ElementData
  (
    'div',
    'category-card-icon',
    {},
    []
  ).renderElement();

  function setIcon({ category })
  {
    if (!category || categoryClass !== category) return;

    const iconToAppend = iconContainer(categoryClass.getCategoryIcon());

    if (element.firstChild) 
    {
      element.firstChild.replaceWith(iconToAppend);
      return;
    };

    element.append(iconToAppend);
  };

  setIcon({ category: categoryClass });
  selectCategoryEventsManager.on(selectCategoryEvents.categoryIconChanged, setIcon);
  return element;
}