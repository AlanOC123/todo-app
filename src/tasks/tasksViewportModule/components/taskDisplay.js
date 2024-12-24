import ElementData from "../../../shared/utils/ElementData";
import taskPageState from "../../shared/utils/taskPageState";
import taskPageEventsManager from "../../shared/events/taskPageEventsManager";
import taskPageEvents from "../../shared/events/taskPageEvents";
import taskViewportEventManager from "../events/taskViewportEventsManager";
import taskViewportEvents from "../events/taskViewportEvents";
import taskGroupingCard from "../../shared/components/taskGroupingCard/taskGroupingCard";
import sortTasks from "../../shared/utils/sortTasks";
import filterTasks from "../../shared/utils/filterTasks";

export default function taskDisplay()
{
  const element = new ElementData
  (
    'div',
    'task-display',
    {},
    []
  ).renderElement();

  function renderElement()
  {
    taskPageState.setIsDeleting(false);
    taskViewportEventManager.emit(taskViewportEvents.deletingTask, { state: false });
    while (element.firstChild) element.removeChild(element.firstChild);


    const activeCategory = taskPageState.getActiveCategory();
    const currentFilter = taskPageState.getTaskFiltering();
    const currentSort = taskPageState.getTaskSorting();

    const allTasks = taskPageState.getAllTasks();

    let filteredTasks = activeCategory 
    ? activeCategory.getCategoryTasks()
    : allTasks;

    const [ filterKey, filterValue ] = currentFilter.split(': ');
    const [ sortByKey, sortByValue ] = currentSort.split(': ');
    let filterObject = { [filterKey]: filterValue };
    let sortingObject = { [sortByKey]: sortByValue }

    filteredTasks = filterTasks(filterObject, filteredTasks);

    const 
    { 
      sortedHeadings, 
      colorScheme,  
      sortedTasks
    } = sortTasks(sortingObject, filteredTasks);

    sortedHeadings.forEach
    (
      sortByHeading => 
      {
        const IDObject = { sortByKey, sortByHeading }
        element.append
        (
          taskGroupingCard
          (
            sortByHeading, IDObject, sortedTasks[sortByHeading], colorScheme[sortByHeading]
          )
        )
      }
    );

    taskViewportEventManager.emit(taskViewportEvents.viewportUpdated, { taskCount: filteredTasks.length })
  }

  renderElement();
  taskPageEventsManager.on(taskPageEvents.categorySelected, renderElement);
  taskViewportEventManager.on(taskViewportEvents.viewportFilterUpdated, renderElement);
  taskViewportEventManager.on(taskViewportEvents.viewportSortByUpdated, renderElement);
  taskViewportEventManager.on(taskViewportEvents.viewportRefreshed, renderElement);
  return element;
}