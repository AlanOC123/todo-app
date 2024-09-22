import ElementData from "../../utils/classes/ElementData";
import events from "../../utils/events/common/events";
import EventsManager from "../../utils/events/common/EventsManager";
import createElement from "../../utils/classes/createElement";

export default (function basicBackground() {

  const g4Data = new ElementData(
    'div',
    'basic-g4',
    {},
    []
  ).createElementData();

  const g3Data = new ElementData(
    'div',
    'basic-g3',
    {},
    []
  ).createElementData();

  const g2Data = new ElementData(
    'div',
    'basic-g2',
    {},
    []
  ).createElementData();

  const g1Data = new ElementData(
    'div',
    'basic-g1',
    {},
    []
  ).createElementData();

  const gradientBackgroundData = new ElementData(
    'div',
    'basic-bg',
    {
      id: 'basic-bg'
    },
    [
      createElement(g1Data),
      createElement(g2Data),
      createElement(g3Data),
      createElement(g4Data),
    ],
  ).createElementData()

  function render() {
    let element = document.getElementById(gradientBackgroundData.attributes.id);
    const root = document.getElementById('app');
    if (element) {
      return;
    }

    element = createElement(gradientBackgroundData);

    root.insertBefore(element, root.firstChild);
  }

  function remove() {
    const element = document.getElementById(gradientBackgroundData.attributes.id);
    const root = document.getElementById('app');
    if (element) {
      root.removeChild(element);
    };
  }

  EventsManager.on(events.basicGradientAdded, render);
  EventsManager.on(events.basicGradientRemoved, remove);
})()