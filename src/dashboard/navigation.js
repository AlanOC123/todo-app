import ElementData from "../utils/ElementData";
import iconContainer from "../shared/components/icon";
import iconsMap from "../shared/utils/iconsMap";
import card from "../shared/components/card";
import textElement from "../shared/components/textElement";
import capitaliseString from "../shared/utils/capitaliseString";
import { appEvents, appEventsManager } from "../events/appEvents";

export default (function navigation() {
  function navCard(id) {
    const iconEl = iconContainer(iconsMap[id]?.icon, null);
    const textEl = textElement(capitaliseString(id));
    if (id === 'tasks') textEl.textContent = 'Daily Tasks';
    const cardEl = card();
    cardEl.id = `${id}-card`;
    cardEl.classList.add("nav-card");
    cardEl.append(iconEl, textEl);
    const elementClicked = () => appEventsManager.emit(appEvents.pageSet, id);
    cardEl.onclick = elementClicked;
    return cardEl;
  }

  const element = new ElementData(
    "nav",
    "navigation",
    {
      id: "navigation",
    },
    []
  ).renderElement();

  ["home", "tasks", "projects", "calendar", "stats"]
    .map((heading) => navCard(heading))
    .forEach((card) => element.append(card));

  return element;
})
