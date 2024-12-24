import nameDisplay from "../components/nameDisplay";

export default function changeProjectName(inputElement, projectClass)
{
  if (!inputElement || !projectClass)
  {
    return;
  };

  if (!inputElement.value)
  {
    if (projectClass.getProjectName() === 'Type Project Name')
    {
      inputElement.classList.add('error');
      return;
    }
    inputElement.replaceWith(nameDisplay(projectClass));
    return;
  }

  projectClass.setProjectName(inputElement.value);

  inputElement.replaceWith(nameDisplay(projectClass));
}