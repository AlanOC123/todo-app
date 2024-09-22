import createElement from "../../utils/classes/createElement";
import ElementData from "../../utils/classes/ElementData";
import homePage from './dashboardHome/homePage';
// import tasksPage from './dashboardTasks/tasksPage';
// import projectsPage from './dashboardProjects/projectsPage';
// import statsPage from './dashboardStats/statsPage';
// import calendarPage from './dashboardCalendar/calendarPage';
import settingsPage from './dashboardSettings/settingsPage';

export default function viewportModule() {
  const containerData = new ElementData(
    "main",
    "viewport",
    {
      id: "viewport",
    },
    [
      homePage(),
      //tasksPage.render(),
      //projectsPage.render(),
      //statsPage.render(),
      //calendarPage.render(),
      settingsPage(),
    ]
  ).createElementData();

  return createElement(containerData);
}
