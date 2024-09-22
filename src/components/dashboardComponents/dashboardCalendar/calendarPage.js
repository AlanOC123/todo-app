import createElement from "../../../utils/classes/createElement";
import ElementData from "../../../utils/classes/ElementData";

export default (function calendarPage() {
  const containerData = new ElementData(
    "div",
    "calendar",
    {
      id: "calendar",
    },
    []
  ).createElementData();

  function render() {
    return createElement(containerData);
  }

  return {
    containerData,
    render,
  };
})();