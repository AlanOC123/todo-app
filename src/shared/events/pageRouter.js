import dashboardEventsManager from "../../dashboard/shared/utils/dashboardEventsManager";
import dashboardEvents from "../../dashboard/shared/events/dashboardEvents";
import resetActivePage from "../utils/resetActivePage";

export default function pageRouter() {
  function routeHome() {
    resetActivePage();
    const page = document.querySelector("#home");
    const icon = document.querySelector("#home-card");
    page.classList.add("page-active");
    icon.classList.add("icon-active");
  }
  function routeTasks() {
    resetActivePage();
    const page = document.querySelector("#tasks");
    const icon = document.querySelector("#tasks-card");
    page.classList.add("page-active");
    icon.classList.add("icon-active");
  }
  function routeProjects() {
    resetActivePage();
    const page = document.querySelector("#projects");
    const icon = document.querySelector("#projects-card");
    page.classList.add("page-active");
    icon.classList.add("icon-active");
  }
  function routeStats() {
    resetActivePage();
    const page = document.querySelector("#stats");
    const icon = document.querySelector("#stats-card");
    page.classList.add("page-active");
    icon.classList.add("icon-active");
  }
  function routeCalendar() {
    resetActivePage();
    const page = document.querySelector("#calendar");
    const icon = document.querySelector("#calendar-card");
    page.classList.add("page-active");
    icon.classList.add("icon-active");
  }
  function routeSettings() {
    resetActivePage();
    const page = document.querySelector("#settings");
    const icon = document.querySelector("#settings-card");
    page.classList.add("page-active");
    icon.classList.add("icon-active");
  }

  dashboardEventsManager.on(dashboardEvents.renderHome, routeHome);
  dashboardEventsManager.on(dashboardEvents.renderTasks, routeTasks);
  dashboardEventsManager.on(dashboardEvents.renderProjects, routeProjects);
  dashboardEventsManager.on(dashboardEvents.renderStats, routeStats);
  dashboardEventsManager.on(dashboardEvents.renderCalendar, routeCalendar);
  dashboardEventsManager.on(dashboardEvents.renderSettings, routeSettings);
}
