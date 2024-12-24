import nameDisplay from "../components/nameDisplay";

export default function changeComponentName(inputElement, componentClass)
{
  if (!inputElement || !componentClass)
  {
    return;
  };

  if (!inputElement.value)
  {
    inputElement.focus();
    inputElement.classList.add('error');
    return;
  }

  componentClass.setComponentName(inputElement.value);

  if (componentClass.getComponentName() === 'Type Component Name')
  {
    inputElement.focus();
    inputElement.classList.add('error');
    return;
  }

  inputElement.replaceWith(nameDisplay(componentClass));
}