import ElementData from "../../../../shared/utils/ElementData";
import nameDisplay from "./components/nameDisplay";
import deleteButton from "./components/deleteButton";
import projectsPageEventsManager from "../../../shared/events/projectsPageEventsManager";
import projectPageEvents from "../../../shared/events/projectsPageEvents";
import projectsState from "../../../shared/utils/projectsState";

export default function componentCard(componentClass) {
  const element = new ElementData
  (
    "div", 
    "component-card", 
    {}, 
    [
      nameDisplay(componentClass),
      deleteButton(componentClass),
    ]
  ).renderElement();

  function elementClicked(event)
  {
    event.stopPropagation();
    projectsState.setActiveComponent(componentClass);
  }

  element.onclick = elementClicked;
  return element;
}
