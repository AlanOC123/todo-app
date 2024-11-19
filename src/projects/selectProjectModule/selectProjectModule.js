import ElementData from "../../shared/utils/ElementData";
import selectProjectOptions from "./components/selectProjectOptions";

export default (function selectProjectModule() {
  return new ElementData
  (
    'div',
    'select-project',
    {},
    [
      selectProjectOptions()
    ]
  ).renderElement();
})();
