import checkbox from "../../../reusableComponents/checkbox";
import createElement from "../../../../utils/classes/createElement";
import ElementData from "../../../../utils/classes/ElementData";
import tasksState from '../../../../utils/stateManagement/tasksState';
import EventManager from '../../../../utils/events/common/EventsManager';
import events from '../../../../utils/events/common/events';

export default function selectFilter(id, name, text) 
{
  const input = checkbox(id, name);

  if (input.firstChild.id === tasksState.filter) 
  {
    input.firstChild.checked = true;
  };

  input.addEventListener("click", markSelection);

  const element = createElement(
    new ElementData(
      "div",
      "select-filter",
      {
        id: id,
      },
      [input, text]
    )
  );

  return element;
}

function markSelection(event) 
{
  const target = event.target;

  if (target.classList.contains("custom-checkmark")) return;

  Array.from
  (
    document.querySelectorAll("input[name=viewport-filters]")
  ).forEach
  (
    item => item.checked = false
  );

  target.checked = true;
  tasksState.sortBy = target.id;
  EventManager.emit(events.tasksViewportUpdated);
}
