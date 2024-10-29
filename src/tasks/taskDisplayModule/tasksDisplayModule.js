import textDisplayContainer from "./components/taskDisplayContainer";
import updateTasksDisplay from "./utils/updateTaskDisplay";
import tasksEventsManager from "../shared/utils/tasksEventsManager";
import tasksEvents from '../shared/events/tasksEvents';

export default (function tasksDisplayModule() {
  const element = textDisplayContainer()
  updateTasksDisplay(element);
  tasksEventsManager.on(tasksEvents.taskViewportUpdated, () => updateTasksDisplay(element));
  return element;
})()