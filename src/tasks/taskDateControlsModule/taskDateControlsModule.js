import ElementData from "../../shared/utils/ElementData";
import taskDateControlsHeader from "./components/taskDateControlsHeader";
import taskDateControlsDateSelect from "./components/taskDateControlsDateSelect";
import taskDateControlsQuickControls from "./components/taskDateControlsQuickControls";
import taskDateControlsEisenhowerToggle from "./components/taskDateControlsEisenhowerToggle";

export default (function taskDateControlsModule()
{
  return new ElementData
  (
    'div',
    'task-date-controls',
    {},
    [
      taskDateControlsHeader(),
      taskDateControlsDateSelect(),
      taskDateControlsQuickControls(),
      taskDateControlsEisenhowerToggle(),
    ]
  ).renderElement();
})()