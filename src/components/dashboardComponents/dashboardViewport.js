import createElement from "../../utils/classes/createElement";
import ElementData from "../../utils/classes/ElementData";

export default (function dashboardViewport() {
  const containerData = new ElementData(
    "main",
    "viewport",
    {
      id: "viewport",
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
})()
