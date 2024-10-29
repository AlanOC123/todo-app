import selectDaysofWeekContainer from "./components/selectDaysofWeekContainer";
import selectDaysLabel from "./components/selectDaysLabel";
import selectDaysList from "./components/selectDaysList";
import selectDaysControls from "./components/selectDaysControls";

export default (function selectDaysofWeekModule()
{
  return selectDaysofWeekContainer
  (
    selectDaysLabel(),
    selectDaysList(),
    selectDaysControls()
  );
})();