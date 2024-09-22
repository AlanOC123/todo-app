import createElement from "../../../utils/classes/createElement";
import ElementData from "../../../utils/classes/ElementData";
import EventsManager from "../../../utils/events/common/EventsManager";
import events from "../../../utils/events/common/events";

export default function settingsBackgroundToggle() {

  function turnOffBackground() {
    EventsManager.emit(events.alternateGradientRemoved);
    EventsManager.emit(events.complexGradientRemoved);
    EventsManager.emit(events.basicGradientRemoved);
  }

  const simpleToggleData = new ElementData(
    'button',
    'toggle-button shadow font-body',
    {},
    ['Simple']
  ).createElementData();

  const simpleButton = createElement(simpleToggleData);

  simpleButton.addEventListener('click', () => {
    turnOffBackground();
    EventsManager.emit(events.basicGradientAdded);
  });

  const alternateToggleData = new ElementData(
    'button',
    'toggle-button shadow font-body',
    {},
    ['Alternating']
  ).createElementData();

  const alternateButton = createElement(alternateToggleData);

  alternateButton.addEventListener('click', () => {
    turnOffBackground();
    EventsManager.emit(events.alternateGradientAdded);
  });

  const complexToggleData = new ElementData(
    'button',
    'toggle-button shadow font-body',
    {},
    ['Complex']
  ).createElementData();

  const complexButton = createElement(complexToggleData);

  complexButton.addEventListener('click', () => {
    turnOffBackground();
    EventsManager.emit(events.complexGradientAdded);
  });

  const basicToggleData = new ElementData(
    'button',
    'toggle-button shadow font-body',
    {},
    ['None']
  ).createElementData();

  const basicButton = createElement(basicToggleData);

  basicButton.addEventListener('click', () => {
    turnOffBackground();
  });

  const buttonsContainerData = new ElementData(
    'div',
    'toggle-buttons-container',
    {},
    [
      basicButton,
      simpleButton,
      alternateButton,
      complexButton,
    ]
  ).createElementData();

  const toggleHeaderData = new ElementData(
    'p',
    'background-toggle-header font-card-title',
    {},
    ['Select A Background Style']
  ).createElementData()

  const containerData = new ElementData(
    'div',
    'background-toggle',
    {},
    [
      createElement(toggleHeaderData),
      createElement(buttonsContainerData)
    ]
  ).createElementData();

  return createElement(containerData);
}