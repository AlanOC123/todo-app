import ElementData from "../../../../shared/utils/ElementData";
import textArea from "./components/textArea";
import addThoughtButton from "./components/addThoughtButton";
import filterButton from "./components/filterButton";

export default function thoughtBubbleControls()
{
  return new ElementData
  (
    'div',
    'thought-bubble-controls',
    {},
    [
      textArea(),
      new ElementData
      (
        'div',
        'thought-bubble-buttons-wrapper',
        {},
        [
          filterButton(),
          addThoughtButton(),
        ]
      ).renderElement(),
    ]
  ).renderElement();
}