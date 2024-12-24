import ElementData from "../../../../../shared/utils/ElementData";
import taskPageState from "../../../../shared/utils/taskPageState";
import filterTaskInput from "./filterTaskInput";
import sortTaskButton from "./sortTaskButton";

export default function filterTaskButton()
{
  const element = new ElementData
  (
    'button',
    'filter-task-button',
    {},
    ['Filter Tasks']
  ).renderElement();

  function setText()
  {
    const currentFilter = taskPageState.getTaskFiltering();
    let text;

    if (currentFilter === 'All') text = 'Filter Tasks';
    else if (currentFilter.includes('Priority')) text = 'Filter By: Priority';
    else if (currentFilter.includes('Status')) text = 'Filter By: Status';
    else if (currentFilter.includes('Difficulty')) text = 'Filter By: Difficulty';

    element.textContent = text;
  }

  function elementClicked()
  {
    const parentElement = element.parentElement;
    if (!parentElement) return;
    const hasSortBySelect = parentElement.querySelector('.sort-task-input');
    if (hasSortBySelect) hasSortBySelect.replaceWith(sortTaskButton());
    element.replaceWith(filterTaskInput());
  }

  setText();
  element.onclick = elementClicked;
  return element;
}