import ElementData from "../../../../shared/utils/ElementData";
import iconContainer from "../../../../shared/components/icon";
import iconsMap from "../../../../shared/utils/iconsMap";
import CategoryClass from "../../../shared/utils/CategoryClass";
import categoryCardNameInput from "../categoryCard/components/categoryCardNameInput";
import taskPageState from "../../../shared/utils/taskPageState";

export default function newCategoryCard()
{
  const addCategoryIcon = iconContainer(iconsMap.create.icon, null);

  const element = new ElementData
  (
    'li',
    'new-category-card',
    {},
    [
      addCategoryIcon,
      'New Task Category'
    ]
  ).renderElement();

  function elementClicked(event)
  {
    event.stopPropagation();
    const newCategory = new CategoryClass();
    taskPageState.addCategory(newCategory);
    const categoryCard = newCategory.getCategoryCard();
    const categoryCardNameElement = categoryCard.querySelector('.category-card-name');

    if (!categoryCardNameElement) return;

    const categoryCardNameInputElement = categoryCardNameInput(newCategory);
    categoryCardNameElement.replaceWith(categoryCardNameInputElement);

    categoryCardNameInputElement.focus();
  }

  element.onclick = elementClicked;
  return element;
}