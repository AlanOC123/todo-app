import ElementData from "../../../../../shared/utils/ElementData";
import taskDifficultyInput from "./taskDifficultyInput";

export default function taskDifficultyDisplay(taskClass)
{
  const currentDifficulty = taskClass.getTaskDifficulty();

  const element = new ElementData
  (
    'p',
    'task-card-difficulty-display',
    {},
    [`${currentDifficulty}`]
  ).renderElement();

  const classMap =
  {
    Easy: 'easy',
    Medium: 'medium',
    Hard: 'hard',
  };

  element.classList.add(classMap[currentDifficulty]);

  function elementClicked()
  {
    element.replaceWith(taskDifficultyInput(taskClass));
  };

  element.onclick = elementClicked;

  return element;
}