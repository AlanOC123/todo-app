import ElementData from "../../../shared/utils/ElementData";
import eisenhowerMatrixModule from "../../eisenHowerMatrixModule/eisenhowerMatrixModule";

export default function taskDateControlsEisenhowerToggle()
{
  const buttonElement = new ElementData
  (
    'button',
    'task-date-controls-eisenhower-toggle-button',
    {},
    ['Toggle Eisenhower Matrix']
  ).renderElement();

  const element = new ElementData
  (
    'div',
    'task-date-controls-eisenhower-toggle',
    {},
    [ buttonElement ]
  ).renderElement();

  function buttonClicked()
  {
    const mainPage = document.getElementById('tasks');

    if (!mainPage) return;

    mainPage.append(eisenhowerMatrixModule());
  }

  buttonElement.onclick = buttonClicked;

  return element;
}