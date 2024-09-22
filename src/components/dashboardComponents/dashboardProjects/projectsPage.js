import createElement from "../../../utils/classes/createElement";
import ElementData from "../../../utils/classes/ElementData";

export default (function projectsPage() {
  const containerData = new ElementData(
    "div",
    "projects",
    {
      id: "projects",
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