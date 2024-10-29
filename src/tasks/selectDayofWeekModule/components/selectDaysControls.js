import nextButton from "./nextButton";
import prevButton from "./prevButton";
import ElementData from "../../../shared/utils/ElementData";

export default function selectDaysControls()
{
  return new ElementData
  (
    'div',
    'select-day-controls',
    {},
    [
      prevButton(),
      nextButton(),
    ]
  ).renderElement()
}