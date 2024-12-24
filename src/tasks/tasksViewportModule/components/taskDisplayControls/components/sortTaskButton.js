import ElementData from "../../../../../shared/utils/ElementData";
import taskPageState from "../../../../shared/utils/taskPageState";
import sortTaskInput from "./sortTaskInput";
import filterTaskButton from "./filterTaskButton";

export default function sortTaskButton()
{
  const element = new ElementData
  (
    'button',
    'sort-task-button',
    {},
    ['Sort Tasks']
  ).renderElement();

    function setText()
    {
      const currentSort = taskPageState.getTaskSorting();
      let text;
  
      if (currentSort === 'All') text = 'Sort Tasks';
      else if (currentSort.includes('Priority')) text = 'Sort By: Priority';
      else if (currentSort.includes('Status')) text = 'Sort By: Status';
      else if (currentSort.includes('Difficulty')) text = 'Sort By: Difficulty';
  
      element.textContent = text;
    }

  function elementClicked()
  {
    const parentElement = element.parentElement;
    if (!parentElement) return;
    const hasFilterBySelect = parentElement.querySelector('.filter-task-input');
    if (hasFilterBySelect) hasFilterBySelect.replaceWith(filterTaskButton());
    element.replaceWith(sortTaskInput());
  }

  setText();
  element.onclick = elementClicked;
  return element;
}