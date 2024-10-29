import confirmButton from "../../../../../shared/components/confirmButton";
import markTaskComplete from "../utils/markTaskComplete";

export default function taskCardMarkCompleteButton()
{
  const element = confirmButton(null);
  element.addEventListener('click', markTaskComplete);
  element.classList.add('confirm');
  return element;
}