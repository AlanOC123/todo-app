import ElementData from "../../../shared/utils/ElementData";
import previewTheme from "../utils/previewTheme";
import changeActiveTheme from "../utils/changeActiveTheme";

export default function themeCard(theme, currentTheme)
{
  const element = new ElementData
  (
    'li',
    'theme-card',
    {
      id: theme.id,
    },
    [
      themePreview(theme),
      themeTitle(theme)
    ]
  ).renderElement();

  if (theme.id === currentTheme) { element.classList.add('active') }

  element.style.border = `4px solid rgba(${theme.secondary}, 1)`

  element.addEventListener('mouseenter', previewTheme);
  element.addEventListener('mouseleave', previewTheme);
  element.addEventListener('click', changeActiveTheme);

  return element;
}

function themeTitle({ text })
{
  return new ElementData
  (
    'p',
    'theme-text',
    {},
    [text]
  ).renderElement()
}

function themePreview({ primary, secondary, accent })
{
  const element = new ElementData
  (
    'div',
    'theme-preview',
    {},
    []
  ).renderElement();

  element.style.background = `linear-gradient(
    to bottom,
    rgba(${primary}, 1),
    rgba(${secondary}, 1),
    rgba(${accent}, 1)
  )`

  return element;
}