import ElementData from "../../shared/utils/ElementData";
import selectCategoryHeader from "./components/selectCategoryHeader";
import selectCategoryViewport from "./components/viewport/selectCategoryViewport";

export default (function selectCategoryModule()
{
  return new ElementData
  (
    'div',
    'select-task-category',
    {},
    [
      selectCategoryHeader(),
      selectCategoryViewport(),
    ]
  ).renderElement();
})()