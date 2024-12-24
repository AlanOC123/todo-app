import ElementData from "../../../../../shared/utils/ElementData";
import taskCategoryInput from "./taskCategoryInput";
import iconContainer from "../../../../../shared/components/icon";
import selectCategoryEventsManager from '../../../../selectCategoryModule/events/selectCategoryEventsManager'
import selectCategoryEvents from "../../../../selectCategoryModule/events/selectCategoryEvents";
import iconsMap from "../../../../../shared/utils/iconsMap";

export default function taskCategoryDisplay(taskClass)
{
  const currentCategory = taskClass.getTaskCategory();
  let iconElement = iconsMap.rainbow.icon;
  if (currentCategory && currentCategory !== 'General')
  {
    iconElement = currentCategory.getCategoryIcon(); 
  }

  if (iconElement) iconElement = iconContainer(iconElement);

  const categoryName = (currentCategory && currentCategory !== 'General')
  ? currentCategory.getCategoryName()
  : 'General';

  const categoryNameElement = new ElementData
  (
    'p',
    'task-card-category-text',
    {},
    [categoryName]
  ).renderElement()

  const element = new ElementData
  (
    'div',
    'task-card-category-display',
    {},
    [
      iconElement,
      categoryNameElement
    ]
  ).renderElement();

  function elementClicked()
  {
    element.replaceWith(taskCategoryInput(taskClass));
  };

  function categoryNameChanged({ category })
  {
    if (category !== currentCategory) return;

    categoryNameElement.textContent = category.getCategoryName() || 'General';
    element.firstChild.replaceWith(iconContainer(category.getCategoryIcon()));
  }

  element.onclick = elementClicked;

  selectCategoryEventsManager.on(selectCategoryEvents.categoryNameChanged, categoryNameChanged);

  return element;
}