import ElementData from "../../shared/utils/ElementData";
import taskViewportHeader from "./components/taskViewportHeader";
import taskDisplayControls from "./components/taskDisplayControls/taskDisplayControls";
import taskDisplay from "./components/taskDisplay";

export default (function tasksViewportModule()
{
  return new ElementData
  (
    'div',
    'task-viewport',
    {},
    [
      taskViewportHeader(),
      taskDisplayControls(),
      taskDisplay(),
    ]
  ).renderElement();
})()