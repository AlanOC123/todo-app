import createElement from "../../../utils/classes/createElement";
import ElementData from "../../../utils/classes/ElementData";

export default (function tasksPage() {
  const containerData = new ElementData(
    "div",
    "tasks",
    {
      id: "tasks",
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