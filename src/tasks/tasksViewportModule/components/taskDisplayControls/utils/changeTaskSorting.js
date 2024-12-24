import sortTaskButton from "../components/sortTaskButton";
import taskPageState from "../../../../shared/utils/taskPageState";

export default function changeTaskSorting(event)
{
  if (!event) return;
  event.stopPropagation();

  const inputElement = event.target;

  if (!inputElement) return;

  const selectedOption = inputElement.selectedOptions[0];
  const selectedValue = selectedOption.value;
  const selectedLabel = selectedOption.parentElement.label;

  if (!selectedOption || !selectedValue || !selectedLabel) return;

  if (selectedValue === '--Select Sort--')
  {
    inputElement.classList.add('error');
    inputElement.focus();
    inputElement.showPicker();
    return;
  };

  taskPageState.setTaskSorting(selectedLabel, selectedValue);
  inputElement.replaceWith(sortTaskButton());
}