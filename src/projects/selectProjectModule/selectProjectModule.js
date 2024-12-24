import ElementData from "../../shared/utils/ElementData";
import selectProjectHeader from "./components/selectProjectHeader";
import selectProjectViewport from "./components/viewport/selectProjectViewport";

export default (function selectProjectModule() 
{
  const element = new ElementData
  (
    'div',
    'select-project',
    {},
    [
      selectProjectHeader(),
      selectProjectViewport(),
    ]
  ).renderElement();

  return element;
})();
