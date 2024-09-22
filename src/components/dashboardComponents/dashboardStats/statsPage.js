import createElement from "../../../utils/classes/createElement";
import ElementData from "../../../utils/classes/ElementData";

export default (function statsPage() {
  const containerData = new ElementData(
    "div",
    "stats",
    {
      id: "stats",
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