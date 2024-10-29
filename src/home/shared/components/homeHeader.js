import createElement from "../../../utils/classes/createElement";
import ElementData from "../../../utils/classes/ElementData";
import storageModule from "../../../utils/dataProcessing/storageModule";
import events from "../../../utils/events/common/events";
import EventsManager from "../../../utils/events/common/EventsManager";
import TimeManager from "../../../utils/stateManagement/common/TimeManager";
import header from "../../reusableComponents/header";

export default function homeHeader() {

  const clockData = new ElementData(
    "p",
    "header-clock",
    {},
    []
  ).createElementData();

  const sectionHeader = header();
  const clock = createElement(clockData);

  createWelcomeMessage();
  createClockMessage();

  EventsManager.on(events.nameChanged, createWelcomeMessage);
  EventsManager.on(events.updateTime, createWelcomeMessage, createClockMessage);

  return(
    createElement
    (
      new ElementData
      (
        'div',
        '',
        {},
        [ 
          sectionHeader,
          clock
        ]
      ).createElementData()
    )
  )
}
