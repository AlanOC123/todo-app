import createElement from "../../../utils/classes/createElement";
import ElementData from "../../../utils/classes/ElementData";
import createNavListItem from "./createNavListItem";
import createNavProfileItem from "./createNavProfileItem";
import storageModule from "../../../utils/dataProcessing/storageModule";
import setImage from '../../../utils/dataProcessing/common/setImage';
import pageRouter from "../../../utils/events/common/pageRouter";
import events from "../../../utils/events/common/events";
import EventsManager from "../../../utils/events/common/EventsManager";

export default function navigationModule() {

  const listData = new ElementData(
    'ul',
    'nav-list',
    {},
    []
  ).createElementData();

  const navBodyData = new ElementData(
    'nav',
    'navigation-body',
    {},
    [],
  ).createElementData();

  const containerData = new ElementData(
    "div",
    "navigation",
    {
      id: "navigation",
    },
    []
  ).createElementData();

  const navItems = [
    {
      icon: 'fa-solid fa-house',
      text: 'Home',
      id: 'home',
      emit: events.renderHome,
    },
    {
      icon: 'fa-solid fa-list-check',
      text: 'Tasks',
      id: 'tasks',
      emit: events.renderTasks
    },
    {
      icon: 'fa-solid fa-diagram-project',
      text: 'Projects',
      id: 'projects',
      emit: events.renderProjects
    },
    {
      icon: 'fa-solid fa-calendar',
      text: 'Calendar',
      id: 'calendar',
      emit: events.renderCalendar
    },
    {
      icon: 'fa-solid fa-chart-simple',
      text: 'Stats',
      id: 'stats',
      emit: events.renderStats
    },
    {
      icon: 'fa-solid fa-gear',
      text: 'Settings',
      id: 'settings',
      emit: events.renderSettings
    },
  ];

  const listElement = createElement(listData);
  const navBodyElement = createElement(navBodyData);
  const navigation = createElement(containerData);

  navItems.forEach(item => { 
    const navCard = createNavListItem(item.icon, item.text, item.id);
    navCard.onclick = () => EventsManager.emit(item.emit);
    listElement.append(navCard);
  });

  listElement.firstChild.classList.add('active');

  listElement.append(createNavProfileItem());

  navBodyElement.append(listElement);

  navigation.append(navBodyElement);

  return navigation;
}
