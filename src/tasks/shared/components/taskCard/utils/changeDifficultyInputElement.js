import taskDifficultyDisplay from "../components/taskDifficultyDisplay";

export default function changeDifficultyInputElement(inputElement, taskClass)
{
  if (!inputElement || !taskClass) return;
  inputElement.replaceWith(taskDifficultyDisplay(taskClass));
}