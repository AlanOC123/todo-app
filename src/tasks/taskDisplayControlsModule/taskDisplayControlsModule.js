import calendarViewButton from "./components/calendarViewButton";
import createTaskButton from "./components/createTaskButton";
import tasksControlsContainer from "./components/taskControlsContainer";

export default (function taskDisplayControlsModule()
{
  return tasksControlsContainer
  (
    calendarViewButton(),
    createTaskButton(),
  );
})()