import storageAPI from "../../dataProcessing/storageModule";
import themes from "../../classes/themes";

export default function applyTheme(userChosenTheme = null) {
  const theme =
    themes.find((theme) => theme.id === userChosenTheme) 
    || storageAPI.getSettings("theme") 
    || themes.find((theme) => theme.default);

  if (!theme) {
    console.error("No theme found. Applied default theme.");
    return;
  }

  const {
    primaryClr = "0, 0, 0",
    secondaryClr = "0, 0, 0",
    highlightClr = "0, 0, 0",
    contrastClr = "255, 255, 255",
    textClr = "0, 0, 0",
  } = theme;

  const [ dec1, dec2, dec3,  dec4, dec5 ] = theme.extraColors || [];

  const root = document.documentElement;

  const props = [
    { prop: "--pri-clr", val: primaryClr },
    { prop: "--sec-clr", val: secondaryClr },
    { prop: "--high-clr", val: highlightClr },
    { prop: "--contrast-clr", val: contrastClr },
    { prop: "--text-clr", val: textClr },
    { prop: "--dec-clr-1", val: dec1 },
    { prop: "--dec-clr-2", val: dec2 },
    { prop: "--dec-clr-3", val: dec3 },
    { prop: "--dec-clr-4", val: dec4 },
    { prop: "--dec-clr-5", val: dec5 },
  ]

  props.forEach(({ prop, val }) => root.style.setProperty( prop, val ));

  function themeIsSet() {
    return props.every(
      ({ prop }) => getComputedStyle(document.documentElement).getPropertyValue(prop).trim() !== ''
    );
  }

  if (!themeIsSet()) {
    console.error('Error setting theme.');
    applyTheme();
  }
}
