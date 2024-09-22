import ElementData from "../../utils/classes/ElementData";
import events from "../../utils/events/common/events";
import EventsManager from "../../utils/events/common/EventsManager";
import createElement from "../../utils/classes/createElement";

export default (function alternateBackground() {

  const tileData = new ElementData(
    'div',
    'tile-bg', 
    {},
    []
  ).createElementData();

  const gradientBackgroundData = new ElementData(
    'div',
    'alternate-bg',
    {
      id: 'alternate-bg'
    },
    [],
  ).createElementData()

  function render() {
    let element = document.getElementById(gradientBackgroundData.attributes.id);
    const root = document.getElementById('app');
    if (element) {
      return;
    }

    element = createElement(gradientBackgroundData);

    const colors = [ 
      '--ex-clr-1',
      '--ex-clr-2',
      '--ex-clr-3',
      '--ex-clr-4',
      '--ex-clr-5',
    ];

    for (let i = 0; i < 20; i++) {
      const tile = createElement(tileData);
      tile.style.backgroundColor = `rgba(var(${colors[Math.floor(Math.random() * colors.length)]}), 1)`
      element.append(tile);
    };

    root.insertBefore(element, root.firstChild);
  }

  function remove() {
    const element = document.getElementById(gradientBackgroundData.attributes.id);
    const root = document.getElementById('app');
    if (element) {
      root.removeChild(element);
    };
  }

  EventsManager.on(events.alternateGradientAdded, render);
  EventsManager.on(events.alternateGradientRemoved, remove);
})()