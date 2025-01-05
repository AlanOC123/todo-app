import ElementData from "../../../utils/ElementData";
import themeHandler from "../../../shared/utils/themeHandler";

export default function selectUserThemes(newUser) {
  console.log(newUser);
  const allThemes = themeHandler.getThemes();

  function themeCard(themeObject) {
    const themePreview = new ElementData(
      "div",
      "select-theme-preview",
      {},
      []
    ).renderElement();

    const wrapperElement = new ElementData
    (
      'div',
      'preview-wrapper',
      {},
      [ themePreview ]
    ).renderElement();

    const lightPri = themeObject.light["--pri-clr"];
    const darkPri = themeObject.dark["--pri-clr"];

    themePreview.style.backgroundImage = `linear-gradient(to bottom right, rgba(${lightPri}, 1), rgba(${darkPri}, 1))`;

    const themeText = new ElementData("p", "select-theme-text", {}, [
      themeObject.themeText,
    ]).renderElement();

    const element = new ElementData("div", "select-theme-card", {}, [
      wrapperElement,
      themeText,
    ]).renderElement();

    function elementHover(event)
    {
      if (event.type === "mouseenter") themeHandler.previewTheme(element.textContent);
      else themeHandler.previewTheme(newUser.preferences?.colorTheme);
    }

    function elementClicked()
    {
      const { themeText } = themeObject;
      themeHandler.setTheme(themeText);
      newUser.preferences.colorTheme = themeText;
    }

    element.onmouseenter = elementHover;
    element.onmouseleave = elementHover;
    element.onclick = elementClicked;

    return element;
  }

  const element = new ElementData(
    "div",
    "select-theme",
    {},
    []
  ).renderElement();

  Object.entries(allThemes)
    .map(([themeKey, _]) => themeCard(allThemes[themeKey]))
    .forEach((card) => element.append(card));

  return element;
}
