import home from "../home/home";
import tasks from "../tasks/tasks";
import projects from "../projects/projects";
import stats from "../stats/stats";
import calendar from "../calendar/calendar";
import appState from "../data/appState";
import { appEventsManager, appEvents } from "./appEvents";

export default (function router() {

  const routingInformation = {
    home: (pageID) => changePage(home, pageID),
    tasks: (pageID) => changePage(tasks, pageID),
    projects: (pageID) => changePage(projects, pageID),
    stats: (pageID) => changePage(stats, pageID),
    calendar: (pageID) => changePage(calendar, pageID),
  };

  function changePage(pageFn, iconID) {
    changeIcon(iconID);
    const viewport = document.getElementById("main-view");
    if (!viewport) {
      console.error("Viewport element not found", viewport);
      return;
    }

    if (viewport.firstChild) viewport.removeChild(viewport.firstChild);
    viewport.appendChild(pageFn());
  }

  function changeIcon(iconID) {
    const activeClass = "icon-active";
    const currentIcon = document.querySelector(`.${activeClass}`);
    if (currentIcon) currentIcon.classList.remove(`${activeClass}`);

    const chosenIcon = document.querySelector(`#${iconID}-card`);

    if (!chosenIcon) {
      console.error("Icon not found", chosenIcon);
      return;
    }

    chosenIcon.classList.add(`${activeClass}`);
  };

  function _routeToPage(pageID)
  {
    console.log(pageID);
    if (!pageID)
    {
      console.error('No Page Provided');
      return false;
    }
    routingInformation[pageID]();
  }

  appEventsManager.on(appEvents.pageSet, _routeToPage);
})()
