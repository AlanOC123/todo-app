import ElementData from "../../../../shared/utils/ElementData";
import taskPageEvents from "../../../shared/events/taskPageEvents";
import taskPageEventsManager from "../../../shared/events/taskPageEventsManager";
import taskPageState from "../../../shared/utils/taskPageState";
import newCategoryCard from "./newCategoryCard";
import allTasksCard from "./allTasksCard";

export default function selectCategoryViewport()
{
  const newCategoryButton = newCategoryCard();
  const element = new ElementData
  (
    'ul',
    'select-category-viewport',
    {},
    [
      allTasksCard(),
      newCategoryButton,
    ]
  ).renderElement();

  function renderElement()
  {
    const currentCategories = taskPageState.getCategories();

    if (currentCategories.length === 0)
    {
      element.append(newCategoryButton);
      return;
    }

    while (element.firstChild)
    {
      element.removeChild(element.firstChild);
    };

    element.append(allTasksCard());

    currentCategories.forEach
    (
      category => element.append(category.getCategoryCard())
    );

    element.append(newCategoryButton);
  };

  function categoryAdded({ categoryCard })
  {
    if (!categoryCard) return;

    element.insertBefore(categoryCard, newCategoryButton);
  }

  function categoryDeleted({ categoryCard })
  {
    if (!categoryCard) return;

    element.removeChild(categoryCard);
  }

  renderElement();
  taskPageEventsManager.on(taskPageEvents.categoryAdded, categoryAdded);
  taskPageEventsManager.on(taskPageEvents.categoryDeleted, categoryDeleted);
  return element;
}