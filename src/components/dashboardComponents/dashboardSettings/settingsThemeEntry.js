import createElement from "../../../utils/classes/createElement";
import ElementData from "../../../utils/classes/ElementData";
import EventsManager from "../../../utils/events/common/EventsManager";
import events from "../../../utils/events/common/events";
import themes from "../../../utils/classes/themes";
import applyTheme from "../../../utils/stateManagement/common/applyTheme";
import setTheme from "../../../utils/dataProcessing/common/setTheme";
import storageModule from "../../../utils/dataProcessing/storageModule";

export default function settingsThemeEntry() {

  function themeCard(theme) {

    const themeTitleData = new ElementData(
      'p',
      'theme-text',
      {},
      [theme.text]
    ).createElementData();

    const themePreviewData = new ElementData(
      'div',
      'theme-preview',
      {},
      []
    ).createElementData();

    const preview = createElement(themePreviewData);

    preview.style.background = `linear-gradient(
      to bottom,
      rgba(${theme.primary}, 1),
      rgba(${theme.secondary}, 1),
      rgba(${theme.accent}, 1)
    )`

    const containerData = new ElementData(
      'li',
      'theme-card',
      {
        id: theme.id
      },
      [
        preview,
        createElement(themeTitleData)
      ]
    ).createElementData();

    const element = createElement(containerData);

    element.style.border = `4px solid rgba(${theme.secondary}, 1)`

    element.addEventListener('mouseenter', () => {
      applyTheme(theme.id);
    });

    element.addEventListener('mouseleave', applyTheme);

    element.addEventListener('click', (e) => {
      setTheme(theme.id);
      const cards = Array.from(cardContainer.querySelectorAll('.theme-card'));
      cards.forEach(card => card.classList.remove('active'));
      e.target.classList.add('active');
    });

    const isThemeActive = storageModule.getSettings('theme') === element.id;

    if (isThemeActive) {
      element.classList.add('active');
    }

    return element;
  }

  const themeHeaderData = new ElementData(
    'p',
    'theme-entry-header',
    {},
    ['Themes']
  ).createElementData();

  const themeContainerData = new ElementData(
    'ul',
    'theme-card-container',
    {},
    [],
  ).createElementData();

  const cardContainer = createElement(themeContainerData);

  themes.forEach(theme => {
    const card = themeCard(theme);
    cardContainer.append(card);
  })

  const containerData = new ElementData(
    'div',
    'theme-entry', 
    {},
    [
      createElement(themeHeaderData),
      cardContainer
    ]
  ).createElementData();

  EventsManager.on(events.themeChanged, applyTheme);

  return createElement(containerData);
}