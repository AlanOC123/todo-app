import ElementData from "../../../../shared/utils/ElementData";
import categoryCardIcon from "./components/categoryCardIcon";
import categoryCardName from "./components/categoryCardName";
import categoryCardCount from "./components/categoryCardCount";
import categoryCardDeleteButton from "./components/categoryCardDeleteButton";
import taskPageState from "../../../shared/utils/taskPageState";

export default function categoryCard(categoryClass)
{
  const element = new ElementData
  (
    'li',
    'category-card',
    {},
    [
      categoryCardIcon(categoryClass),
      categoryCardName(categoryClass),
      categoryCardDeleteButton(categoryClass),
      categoryCardCount(categoryClass),
    ]
  ).renderElement();

  function elementClicked()
  {
    taskPageState.setActiveCategory(categoryClass);
  };

  element.onclick = elementClicked;

  return element;
}