import filterTaskButton from "../components/filterTaskButton";
import taskPageState from "../../../../shared/utils/taskPageState";

export default function changeTaskFiltering(event)
{
  if (!event) return;
  event.stopPropagation();

  const inputElement = event.target;

  if (!inputElement) return;

  const selectedOption = inputElement.selectedOptions[0];
  const selectedValue = selectedOption.value;
  const selectedLabel = selectedOption.parentElement.label;

  if (!selectedOption || !selectedValue || !selectedLabel) return;

  if (selectedValue === '--Select Filter--')
  {
    inputElement.classList.add('error');
    inputElement.focus();
    inputElement.showPicker();
    return;
  };

  taskPageState.setTaskFiltering(selectedLabel, selectedValue);
  inputElement.replaceWith(filterTaskButton());
}