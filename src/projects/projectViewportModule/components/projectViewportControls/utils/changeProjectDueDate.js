import changeProjectDueDateButton from "../components/changeProjectDueDateButton";

export default function changeProjectDueDate(inputElement, projectClass)
{
  if (!inputElement.value || !projectClass)
  {
    return;
  };

  projectClass.setProjectDueDate(inputElement.value);
  inputElement.replaceWith(changeProjectDueDateButton());
}