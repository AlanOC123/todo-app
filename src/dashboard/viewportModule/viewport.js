import viewportPage from "./components/viewportPage";
import home from "../../home/home";
import tasks from "../../tasks/tasks";
import projects from "../../projects/projects";
import calendar from "../../calendar/calendar";
import stats from "../../stats/stats";
import userSettings from "../../userSettings/userSettings";

export default (function viewport()
{
  return viewportPage
  (
    home,
    tasks,
    projects,
    calendar,
    stats,
    userSettings
  )
})()