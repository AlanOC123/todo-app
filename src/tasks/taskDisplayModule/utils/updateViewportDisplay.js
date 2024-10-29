import tasksState from "../../../../utils/stateManagement/tasksState";
import createViewportSection from "./createViewportSection";
import processSortedTasks from "../../shared/utils/processSortedTasks";
import taskCard from "../taskCard/card";
import testTasks from "../testTasks";

export default function updateViewportDisplay(viewportElement) {
  const { daySelected, sortBy } = tasksState;
  const sectionNames = tasksState.sortByHeadings[sortBy];
  while (viewportElement.firstChild) {
    viewportElement.removeChild(viewportElement.firstChild);
  }

  const sections = sectionNames.map((section) =>
    createViewportSection(section, section)
  );

  const sortedTasks = processSortedTasks(
    testTasks,
    sectionNames,
    sortBy,
    daySelected
  );

  sections.forEach((section) => {
    const displayElement = section.querySelector(".display-tasks");
    sortedTasks.forEach((category) => {
      if (category[section.id]) {
        category[section.id].forEach((task) => {
          displayElement.append(taskCard(task));
        });
      }
    });
  });

  sections.forEach((section) => viewportElement.append(section));
}
