import taskDisplaySection from "../components/taskDisplaySection";
import taskCard from "../components/taskCard/taskCard";
import taskCardCreateButton from "../components/taskCard/components/taskCardCreateButton";

export default function appendTaskCardstoDisplay(sectionHeading, sortByOption, taskList, displayModule)
{
  if (sortByOption !== 'all-tasks') 
  {
    const filteredTasks = taskList.filter
    (
      task => task[sortByOption] === sectionHeading
    )

    taskList = filteredTasks;
  }

  const section = taskDisplaySection(sectionHeading, sectionHeading);

  const taskListDisplay = section.querySelector('.task-display-section-container').firstChild;

  taskList.forEach
  (
    task => taskListDisplay.append(taskCard(task))
  )
  taskListDisplay.append(taskCardCreateButton(sectionHeading));
  displayModule.append(section);
}