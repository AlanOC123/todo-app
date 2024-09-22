import createElement from "../../../utils/classes/createElement";
import ElementData from "../../../utils/classes/ElementData";
import storageModule from "../../../utils/dataProcessing/storageModule";
import events from "../../../utils/events/common/events";
import EventsManager from "../../../utils/events/common/EventsManager";
import TimeManager from "../../../utils/stateManagement/common/TimeManager";

export default function homeHeader() {
  function createWelcomeMessage() {
    if (!storageModule.getSettings('init')) {
      return;
    };
    const name = storageModule.getSettings('name').split(' ')[0];
    const hour = TimeManager.hour;
    let message;

    if (hour >= 6 && hour < 12) {
      message = `Good Morning ${name}`;
    };

    if (hour >= 12 && hour < 17) {
      message = `Good Afternoon ${name}`;
    }

    if (hour >= 17 && hour < 21) {
      message = `Good Evening ${name}`;
    } else {
      message = `Good Night ${name}`;
    }

    header.textContent = message;
  };

  function createClockMessage() {
    clock.textContent = `${TimeManager.day} ${TimeManager.date} ${TimeManager.month} ${TimeManager.hour}:${TimeManager.minute}`
  }

  const headerTextData = new ElementData(
    'h2',
    'home-header-text',
    {},
    []
  ).createElementData();

  const clockData = new ElementData(
    'p',
    'header-clock',
    {},
    []
  ).createElementData();

  const header = createElement(headerTextData);
  const clock = createElement(clockData);

  createWelcomeMessage();
  createClockMessage();

  EventsManager.on(events.nameChanged, createWelcomeMessage);
  EventsManager.on(events.updateTime, createWelcomeMessage, createClockMessage);

  const containerData = new ElementData(
    'h1',
    'home-header',
    {},
    [
      header,
      clock
    ]
  ).createElementData()

  return createElement(containerData);
}