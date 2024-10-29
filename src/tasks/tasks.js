import tasksPage from "./shared/components/tasksPage";
import header from "../shared/components/header";
import taskDisplayControlsModule from "./taskDisplayControlsModule/taskDisplayControlsModule";
import selectDaysofWeekModule from "./selectDayofWeekModule/selectDaysofWeekModule";
import sortByControlsModule from "./taskDisplaySortByControls/sortByControlsModule";
import tasksDisplayModule from "./taskDisplayModule/tasksDisplayModule";

export default (function tasks() {
  return tasksPage(
    header("Tasks"),
    taskDisplayControlsModule,
    selectDaysofWeekModule,
    sortByControlsModule,
    tasksDisplayModule,
  );
})();
