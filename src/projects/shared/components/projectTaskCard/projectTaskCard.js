import taskNameDisplay from './components/taskNameDisplay';
import taskControlsContainer from './components/taskControlsContainer';
import deleteTaskButton from './components/deleteTaskButton';
import relateTaskToProjectButton from './components/relateTaskToProjectButton';
import ElementData from '../../../../shared/utils/ElementData';

export default function projectTaskCard(task)
{
  if (!task)
  {
    return;
  };

  return new ElementData
  (
    'div',
    'project-task-card',
    {
      'data-id': task.getTaskID(),
    },
    [
      taskNameDisplay(task.getTaskName()),
      taskControlsContainer
      (
        deleteTaskButton(),
        relateTaskToProjectButton()
      )
    ]
  ).renderElement()
}