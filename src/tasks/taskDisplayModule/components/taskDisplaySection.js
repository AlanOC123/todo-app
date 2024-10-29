import taskDisplaySectionContainer from "./taskDisplaySectionContainer";
import taskDisplaySectionHeader from "./taskDisplaySectionHeader";
import taskDisplayList from "./taskDisplayCardList";

export default function tasksDisplaySection(id, headerText)
{
  return taskDisplaySectionContainer
  (
    id,
    taskDisplaySectionHeader(headerText),
    taskDisplayList(`task-display-list-${id}`),
  );
};