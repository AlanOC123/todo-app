import ElementData from "../../../../../shared/utils/ElementData";
import changeCategoryName from "../utils/changeCategoryName";

export default function categoryCardNameInput(categoryClass)
{
  const element = new ElementData
  (
    'input',
    'category-card-name-input',
    {
      type: 'text',
      min: '2',
      max: '30',
      placeholder: categoryClass.getCategoryName()
    },
    []
  ).renderElement();

  function elementChanged()
  {
    changeCategoryName(element, categoryClass);
  }

  element.onblur = elementChanged;
  return element;
}