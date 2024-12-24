import ElementData from "../../../../../shared/utils/ElementData";
import changeTaskDifficulty from "../utils/changeTaskDifficulty";
import changeDifficultyInputElement from '../utils/changeDifficultyInputElement';
import taskViewportEventManager from '../../../../tasksViewportModule/events/taskViewportEventsManager'
import taskViewportEvents from '../../../../tasksViewportModule/events/taskViewportEvents';

export default function taskDifficultyInput(taskClass)
{
  function optionElement(option)
  {
    return new ElementData
    (
      'option',
      'task-card-difficulty-option',
      { value: option },
      [ option]
    ).renderElement();
  };

  const element = new ElementData
  (
    'select',
    'task-card-difficulty-input',
    {},
    []
  ).renderElement();

  ['--Select Difficulty--' ,'Hard', 'Medium', 'Easy'].forEach
  (
    option => element.append(optionElement(option))
  );

  element.value = '--Select Difficulty--';

  function elementChanged()
  {
    changeTaskDifficulty(element, taskClass);
  }

  function difficultyChanged({ task })
  {
    if (task !== taskClass) return;
    changeDifficultyInputElement(element, taskClass);
  }

  element.onchange = elementChanged;

  taskViewportEventManager.on(taskViewportEvents.taskDifficultyChanged, difficultyChanged);

  return element;
}