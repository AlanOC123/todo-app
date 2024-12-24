import renameComponentButton from "../components/renameComponentButton";
import projectsState from "../../../../shared/utils/projectsState";

export default function changeComponentName(inputElement)
{
  const currentComponent = projectsState.getActiveComponent();
  if (!currentComponent || !inputElement)
  {
    inputElement.replaceWith(renameComponentButton());
    return;
  };

  currentComponent.setComponentName(inputElement.value);
  inputElement.replaceWith(renameComponentButton());
}