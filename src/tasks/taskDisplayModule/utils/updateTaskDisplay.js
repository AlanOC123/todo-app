import taskValues from "../../shared/utils/taskValues";
import tasksState from "../../shared/utils/tasksState";
import testTasks from "../../shared/utils/testTasks";
import appendTaskCardstoDisplay from "./appendTaskCardstoDisplay";

export default function updateTasksDisplay(displayModule)
{
  while (displayModule.firstChild)
  {
    displayModule.removeChild(displayModule.firstChild);
  };

  const 
  { 
    sortByID,
    textHeadings 
  } = taskValues[tasksState.sortBy];

  const todaysTasks = testTasks.filter
  (
    task => task.dueDate === tasksState.dateSelected,
  )

  textHeadings.forEach
  (
    heading => 
    appendTaskCardstoDisplay
    (
      heading, 
      sortByID, 
      todaysTasks, 
      displayModule
    )
  )
}