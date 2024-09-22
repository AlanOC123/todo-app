import storageAPI from "../../dataProcessing/storageModule";
import themes from "../../classes/themes";


export default function applyTheme(data) {

  const theme =
    themes.find((theme) => theme.id === data) ||
    themes.find((theme => theme.id === storageAPI.getSettings("theme"))) ||
    themes.find((theme) => theme.default);

  if (!theme) {
    console.error("No theme found. Applied default theme.");
    return;
  }

  const {
    primary = "34, 34, 34",
    secondary = "85, 85, 85",
    accent = '240, 240, 240'
  } = theme;

  const root = document.documentElement;

  const props = [
    { prop: "--pri-clr", val: primary },
    { prop: "--sec-clr", val: secondary },
    { prop: "--acc-clr", val: accent },
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
