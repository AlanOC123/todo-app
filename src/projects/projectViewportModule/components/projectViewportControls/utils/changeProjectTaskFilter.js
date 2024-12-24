import taskFilterButton from "../components/projectTaskFilterButton";
import projectsState from "../../../../shared/utils/projectsState";

export default function changeFilter(inputElement)
{
  const activeComponent = projectsState.getActiveComponent();

  if (!activeComponent || !inputElement) return;

  const option = inputElement.value;

  if (option === '--Select Filter--') return;
  
  activeComponent.setComponentTaskFilter(option);

  inputElement.replaceWith(taskFilterButton());
}