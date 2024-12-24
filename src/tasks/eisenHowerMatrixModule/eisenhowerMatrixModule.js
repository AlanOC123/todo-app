import ElementData from "../../shared/utils/ElementData";
import matrixDisplay from "./components/matrixDisplay";

export default (function eisenhowerMatrixModule()
{
  const element = new ElementData
  (
    'div',
    'eisenhower-matrix',
    {},
    [
      matrixDisplay(),
    ]
  ).renderElement();

  function removeModule(event)
  {
    const target = event.target;
    if (target !== element) return;

    const mainPage = document.getElementById('tasks');

    if (mainPage) mainPage.removeChild(element);
  }

  element.onclick = removeModule;

  return element;
})