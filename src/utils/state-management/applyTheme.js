import storageAPI from "../storageAPI";
import colourThemes from "../classes/color-themes";

export default function applyTheme(themeName = null) {
  const theme = colourThemes.find(theme => theme.id === themeName)
  || storageAPI.getSettings('theme') 
  || colourThemes.find(theme => theme.default);

  if (!theme) {
    console.error('No theme found. Applied default theme.');
    return;
  };
  
  const { 
    primaryClr = '0, 0, 0, 1',
    secondaryClr  = '0, 0, 0, 1',
    highlightClr  = '0, 0, 0, 1',
    contrastClr  = '255, 255, 255, 1',
    textClr  = '0, 0, 0, 1',
    notStartedClr  = '239, 83, 80, 1',
    startedClr  = '255, 213, 79, 1',
    completeClr  = '129, 199, 132, 1'
  } = theme;

  const root = document.documentElement;

  [
    { prop: '--pri-clr', val: primaryClr },
    { prop: '--sec-clr', val: secondaryClr },
    { prop: '--high-clr', val: highlightClr },
    { prop: '--contrast-clr', val: contrastClr },
    { prop: '--text-clr', val: textClr },
    { prop: '--not-started-clr', val: notStartedClr },
    { prop: '--started-clr', val: startedClr },
    { prop: '--complete-clr', val: completeClr },
  ].forEach(theme => root.style.setProperty(theme.prop, theme.val));
};