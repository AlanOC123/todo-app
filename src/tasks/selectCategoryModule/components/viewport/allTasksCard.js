import ElementData from "../../../../shared/utils/ElementData";
import taskPageEvents from "../../../shared/events/taskPageEvents";
import taskPageEventsManager from "../../../shared/events/taskPageEventsManager";
import taskPageState from "../../../shared/utils/taskPageState";

export default function allTasksCard()
{
  const element = new ElementData
  (
    'li',
    'all-tasks-card',
    {},
    [
      new ElementData
      (
        'p',
        'all-tasks-card-text',
        {},
        ['All Tasks']
      ).renderElement()
    ]
  ).renderElement();

  function elementClicked()
  {
    taskPageState.setActiveCategory(null);
  };

  element.onclick = elementClicked;

  return element;
}