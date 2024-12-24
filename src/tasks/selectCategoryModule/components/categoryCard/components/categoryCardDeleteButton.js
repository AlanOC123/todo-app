import iconsMap from "../../../../../shared/utils/iconsMap";
import iconContainer from "../../../../../shared/components/icon";
import ElementData from "../../../../../shared/utils/ElementData";
import taskPageState from "../../../../shared/utils/taskPageState";
import selectCategoryEventsManager from "../../../events/selectCategoryEventsManager";
import selectCategoryEvents from "../../../events/selectCategoryEvents";

export default function categoryCardDeleteButton(categoryClass)
{
  const element = new ElementData
  (
    'div',
    'category-card-button',
    {},
    []
  ).renderElement();

  function elementChanged({ category })
  {
    if (category !== categoryClass) return;

    let buttonElement;
    const isEditable = categoryClass.getIsCategoryEditable();
  
    if (isEditable)
    {
      buttonElement = iconContainer(iconsMap.delete.icon);
      buttonElement.classList.add('category-card-delete-icon');
    } else
    {
      buttonElement = iconContainer(iconsMap.lock.icon);
      buttonElement.classList.add('category-card-lock-icon');
    };

    if (element.firstChild) element.removeChild(element.firstChild);

    element.append(buttonElement);
  }

  function elementClicked(event)
  {
    event.stopPropagation();
    const isEditable = categoryClass.getIsCategoryEditable();

    if (!isEditable) return;

    taskPageState.deleteCategory(categoryClass);
  }

  element.onclick = elementClicked;

  elementChanged({ category: categoryClass });
  selectCategoryEventsManager.on(selectCategoryEvents.categoryEditStatusChanged, elementChanged);
  return element;
}