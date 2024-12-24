import ElementData from "../../shared/utils/ElementData";
import thoughtBubbleHeader from "./components/thoughtBubbleHeader";
import thoughtBubbleViewport from "./components/viewport/thoughtBubbleViewport";
import thoughtBubbleControls from "./components/controls/thoughtBubbleControls";

export default (function thoughtBubbleModule() {
  const element = new ElementData
  (
    'div',
    'thought-bubble',
    {},
    [
      thoughtBubbleHeader(),
      thoughtBubbleViewport(),
      thoughtBubbleControls(),
    ]
  ).renderElement();

  return element;
})();