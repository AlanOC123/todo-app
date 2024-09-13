import createElement from "../../utils/classes/createElement";
import ElementData from "../../utils/classes/ElementData";
import EventsBus from "../../utils/events/common/eventBus";
import events from "../../utils/events/common/events";
import rootPage from "../common/rootPage";
import navigationModule from "./dashboardNavigation/navigationModule";
import dashboardViewport from './dashboardViewport';

export default (function dashboardPage() {
  const containerData = new ElementData(
    "div",
    "dashboard",
    {
      id: "dashboard",
    },
    [
      navigationModule.render(),
      dashboardViewport.render(),
    ]
  ).createElementData();

  function render() {
    const root = document.getElementById(rootPage.containerData.attributes.id);
    root.appendChild(createElement(containerData));
  }

  EventsBus.on(events.loadDashboard, render);

  return {
    containerData,
    render,
  };
})()
