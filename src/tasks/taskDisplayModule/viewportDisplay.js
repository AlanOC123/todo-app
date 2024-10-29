import createElement from "../../../../utils/classes/createElement";
import ElementData from "../../../../utils/classes/ElementData";
import events from "../../../../utils/events/common/events";
import EventsManager from "../../../../utils/events/common/EventsManager";import updateViewportDisplay from "./updateViewportDisplay";

export default function viewportDisplay()
{
  const element = createElement
  (
    new ElementData
    (
      'div',
      'task-viewport-display',
      {},
      []
    ).createElementData()
  );

  updateViewportDisplay(element);
  EventsManager.on(events.tasksViewportUpdated, () => updateViewportDisplay(element));
  return element;
};