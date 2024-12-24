import dueDateDisplay from "../components/dueDateDisplay";

export default function changeProjectDueDate(inputElement, projectClass)
{
  if (!inputElement.value || !projectClass)
  {
    return;
  };

  projectClass.setProjectDueDate(inputElement.value);
  inputElement.replaceWith(dueDateDisplay(projectClass));
}