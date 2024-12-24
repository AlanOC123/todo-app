import ElementData from "../../../../../shared/utils/ElementData";
import selectCategoryEventsManager from "../../../events/selectCategoryEventsManager";
import selectCategoryEvents from "../../../events/selectCategoryEvents";

export default function categoryCardCount(categoryClass)
{
  const element = new ElementData
  (
    'p',
    'category-card-count',
    {},
    []
  ).renderElement();

  function setCount({ category })
  {
    if (!categoryClass || category !== categoryClass) return;

    element.classList.remove('hidden');

    const numTasks = categoryClass.getCategoryTasks().length;

    if (numTasks === 0) element.classList.add('hidden');

    element.textContent = categoryClass.getCategoryTasks().length || '';
  }

  setCount({ category: categoryClass });
  selectCategoryEventsManager.on(selectCategoryEvents.categoryTaskAdded,setCount);
  selectCategoryEventsManager.on(selectCategoryEvents.categoryTaskDeleted,setCount);
  return element;
}
