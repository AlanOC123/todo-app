import ElementData from "../../../../shared/utils/ElementData";
import iconContainer from "../../../../shared/components/icon";
import iconsMap from "../../../../shared/utils/iconsMap";
import createTask from "../../utils/createTask";

export default function createProjectViewportTaskCard(componentClass)
{
  const addButton = iconContainer(iconsMap.create.icon, null);

  const element = new ElementData
  (
    'div',
    'create-project-viewport-task',
    {},
    [
      addButton,
      new ElementData
      (
        'p',
        'create-project-viewport-task-text',
        {},
        ['Add Task']
      ).renderElement()
    ]
  ).renderElement();

  function buttonClicked()
  {
    createTask(componentClass);
  }

  element.onclick = buttonClicked;

  return element;
}