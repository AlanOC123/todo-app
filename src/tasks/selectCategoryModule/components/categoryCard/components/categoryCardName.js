import ElementData from "../../../../../shared/utils/ElementData";
import selectCategoryEvents from "../../../events/selectCategoryEvents";
import selectCategoryEventsManager from '../../../events/selectCategoryEventsManager';
import categoryCardNameInput from "./categoryCardNameInput";

export default function categoryCardName(categoryClass)
{
  const element = new ElementData
  (
    'p',
    'category-card-name',
    {},
    []
  ).renderElement();

  function setName({ category })
  {
    if (!categoryClass || category !== categoryClass) return;

    element.textContent = categoryClass.getCategoryName();
  };

  function elementClicked(event)
  {
    event.stopPropagation();
    if (!categoryClass.getIsCategoryEditable()) return;
    
    const inputElement = categoryCardNameInput(categoryClass);

    element.replaceWith(inputElement);

    inputElement.focus();
  }

  element.ondblclick = elementClicked;

  setName({ category: categoryClass });
  selectCategoryEventsManager.on(selectCategoryEvents.categoryNameChanged, setName);
  return element;
}