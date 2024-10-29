import ElementData from "../../../shared/utils/ElementData";
import dashboardEventsManager from "../../shared/utils/dashboardEventsManager";

export default function navMenuCard(id, icon, event)
{
  const element = new ElementData
  (
    'div',
    'nav-menu-card',
    {
      id: id,
    },
    [icon]
  ).renderElement();

  element.addEventListener('click', () => dashboardEventsManager.emit(event));

  return element;
};