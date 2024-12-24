import ElementData from "../../../../shared/utils/ElementData";
import taskGroupingCardHeader from "./components/taskGroupingCardHeader";
import taskGroupingsCardTaskDisplay from "./components/taskGroupingsCardTaskDisplay";
import taskGroupingsCardFooter from "./components/taskGroupingsCardFooter";

export default function taskGroupingCard(groupingHeader, IDObject, tasks, colorScheme)
{
  const { sortByKey, sortByHeading } = IDObject;
  if (!tasks) tasks = [];
  const taskCount = tasks.length;

  if (!colorScheme) colorScheme = '';

  return new ElementData
  (
    'div',
    'task-display-grouping-card',
    {
      'data-sorting-key': sortByKey,
      'data-sorting-val': sortByHeading,
    },
    [
      taskGroupingCardHeader(groupingHeader, taskCount, colorScheme),
      taskGroupingsCardTaskDisplay(tasks),
      taskGroupingsCardFooter(),
    ]
  ).renderElement();
}