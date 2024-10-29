import createElement from "./createElement";
import ElementData from "./ElementData";

export default function createHomeTasksCard() {
  const cardValueData = new ElementData(
    'h2',
    'tasks-card-value',
    {},
    []
  ).createElementData();

  const cardHeaderData = new ElementData(
    'h2',
    'tasks-card-header',
    {},
    []
  ).createElementData();

  const cardBodyData = new ElementData(
    'div',
    'home-card-body',
    {},
    [
      createElement(cardHeaderData),
      createElement(cardValueData)
    ],
  );

  return createElement(cardBodyData);
};