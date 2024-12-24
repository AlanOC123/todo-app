import ElementData from "../../../../shared/utils/ElementData";
import taskCountDisplay from "./components/taskCountDisplay";
import filterTaskButton from "./components/filterTaskButton";
import sortTaskButton from "./components/sortTaskButton";
import deleteTaskButton from "./components/deleteTaskButton";

export default function taskDisplayControls()
{
  return new ElementData
  (
    'div',
    'task-display-controls',
    {},
    [
      taskCountDisplay(),
      filterTaskButton(),
      sortTaskButton(),
      deleteTaskButton(),
    ]
  ).renderElement();
}