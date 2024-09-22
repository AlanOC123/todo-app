import createElement from "../../utils/classes/createElement";
import ElementData from "../../utils/classes/ElementData";
import rootPage from "../common/rootPage";
import navigationModule from "./dashboardNavigation/navigationModule";
import viewportModule from "./viewportModule";

export default (function dashboardPage() {
  const containerData = new ElementData(
    "div",
    "dashboard",
    {
      id: "dashboard",
    },
    [ 
      navigationModule(), 
      viewportModule()
    ]
  ).createElementData();

  function render() {
    const root = document.getElementById(rootPage.containerData.attributes.id);
    root.appendChild(createElement(containerData));
  }

  return {
    containerData,
    render,
  };
})();
