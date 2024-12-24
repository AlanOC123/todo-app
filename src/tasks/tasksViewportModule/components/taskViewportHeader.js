import ElementData from "../../../shared/utils/ElementData";
import taskPageEventsManager from "../../shared/events/taskPageEventsManager";
import taskPageEvents from "../../shared/events/taskPageEvents";
import selectCategoryEventsManager from "../../selectCategoryModule/events/selectCategoryEventsManager";
import selectCategoryEvents from "../../selectCategoryModule/events/selectCategoryEvents";
import taskViewportEventManager from "../events/taskViewportEventsManager";
import taskViewportEvents from "../events/taskViewportEvents";
import taskPageState from "../../shared/utils/taskPageState";


export default function taskViewportHeader()
{
  const categoryNameElement= new ElementData
  (
    'span',
    'task-viewport-header-category-name',
    {},
    []
  ).renderElement();

  const filterTasksElement = new ElementData
  (
    'span',
    'task-viewport-header-filter',
    {},
    []
  ).renderElement();

  const sortTasksElement = new ElementData
  (
    'span',
    'task-viewport-header-sort',
    {},
    []
  ).renderElement();

  const element = new ElementData
  (
    'h3',
    'task-viewport-header',
    {},
    []
  ).renderElement();

  function setText()
  {
    while (element.firstChild)
    {
      element.removeChild(element.firstChild);
    };

    const activeCategory = taskPageState.getActiveCategory();

    const categoryName =  activeCategory ? activeCategory.getCategoryName() : 'Tasks';
    const filter = taskPageState.getTaskFiltering();
    const sort = taskPageState.getTaskSorting();
    let [filterByLabel, filterByValue] = taskPageState.getTaskFiltering().split(' ');
    let [sortByLabel, sortByValue] = taskPageState.getTaskSorting().split(' ');
    
    const filterText = filter !== 'All'
    ? `${filterByValue} ${filterByLabel.replace(':', '')} ` 
    : null;
    const sortByText = sort !== 'All' 
    ? `${sortByValue} ${sortByLabel.replace(':', '')} `
    : null;

    categoryNameElement.textContent = categoryName !== 'All Tasks' ? categoryName : 'Tasks';
    filterTasksElement.textContent = filterText;
    sortTasksElement.textContent = sortByText;

    element.append(document.createTextNode('Showing '));
    if (filterText)
    {
      element.append(filterTasksElement)
    };
    element.append(categoryNameElement);

    if (categoryName !== 'Tasks')
    {
      element.append(document.createTextNode(' Tasks'));
    }
    
    if (sortByText)
    {
      element.append(document.createTextNode(' Sorted By'))
      element.append(sortTasksElement);
    }
  };

  function nameChanged({ category })
  {
    const activeCategory = taskPageState.getActiveCategory();

    if (category !== activeCategory) return;

    setText();
  }

  setText();
  selectCategoryEventsManager.on(selectCategoryEvents.categoryNameChanged, nameChanged);
  taskPageEventsManager.on(taskPageEvents.categorySelected, setText);
  taskViewportEventManager.on(taskViewportEvents.viewportSortByUpdated, setText);
  taskViewportEventManager.on(taskViewportEvents.viewportFilterUpdated, setText);
  return element;
}