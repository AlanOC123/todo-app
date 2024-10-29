import iconContainer from "../../../shared/components/icon";
import dashboardEvents from "../../shared/events/dashboardEvents";
import iconsMap from "../../../shared/utils/iconsMap";

const navigationMenuRenderData = [
  {
    id: "home-card",
    icon: iconContainer(iconsMap.home.icon, iconsMap.home.label),
    event: dashboardEvents.renderHome,
  },
  {
    id: "tasks-card",
    icon: iconContainer(iconsMap.tasks.icon, iconsMap.tasks.label),
    event: dashboardEvents.renderTasks,
  },
  {
    id: "projects-card",
    icon: iconContainer(iconsMap.projects.icon, iconsMap.projects.label),
    event: dashboardEvents.renderProjects,
  },
  {
    id: "calendar-card",
    icon: iconContainer(iconsMap.calendar.icon, iconsMap.calendar.label),
    event: dashboardEvents.renderCalendar,
  },
  {
    id: "stats-card",
    icon: iconContainer(iconsMap.stats.icon, iconsMap.stats.label),
    event: dashboardEvents.renderStats,
  },
  {
    id: "settings-card",
    icon: iconContainer(iconsMap.settings.icon, iconsMap.settings.label),
    event: dashboardEvents.renderSettings,
  },
];

export default navigationMenuRenderData;
