import { appEvents, appEventsManager } from "../../events/appEvents";
import appState from "../../data/appState";

const themeHandler = (() => {
  
  let state =
  {
    colorTheme: 'Default',
    themes: availableThemes(),
    colorScheme: () => window.matchMedia("(prefers-color-scheme: dark").matches,
    isDarkMode: false,
  }

  const _setState = (newState) =>
  {
    state.colorTheme = newState.preferences.colorTheme;
    _applyTheme();
  }

  const _applyTheme = () =>
  {
    if (!state.colorTheme || !(typeof state.colorTheme === "string")) 
    {
      console.warn("Invalid theme provided:", state.colorTheme);
      return;
    }

    let chosenTheme = state.themes[state.colorTheme];

    const themeToApply = state.isDarkMode ? chosenTheme.dark : chosenTheme.light;

    if (!themeToApply || typeof themeToApply !== "object") 
    {
      console.warn("Invalid theme provided:", themeToApply);
      return;
    }

    const root = document.documentElement;

    for (const key in themeToApply) 
    {
      root.style.setProperty(key, themeToApply[key]);
    };
  };

  const _simulateChange = (matches) => 
  {
    const event = new Event("change");
    Object.defineProperty(event, "matches", { value: matches, writable: true });
    colorSchemeQuery.dispatchEvent(event);
  };

  const colorSchemeQuery = window.matchMedia("(prefers-color-scheme: dark");

  const colorSchemeChange = () =>
  {
    state.isDarkMode = colorScheme();
    _applyTheme();
  }

  colorSchemeQuery.addEventListener('change', colorSchemeChange);
  appEventsManager.on(appEvents.stateChanged, _setState);

  state.isDarkMode = state.colorScheme();
  _applyTheme();

  return {
    getThemes: () => state.themes,
    setTheme: (key) =>
    {
      if (!key)
      {
        console.error('Key not provided', key);
        return;
      };

      state.colorTheme = key;
      _applyTheme();
    },
    previewTheme: (key, isSet = true) =>
    {
      if (!key)
      {
        console.warn('No theme given', key);
        return;
      }

      if (isSet) state.colorTheme = key;
      else state.colorTheme = 'Default';
      _applyTheme();
    },

    removeQueryListener: () =>
    {
      colorSchemeQuery.removeEventListener("change", colorSchemeChange);
    },
  };
})();

export default themeHandler;

function availableThemes() {
  const setValues = {
    light: {
      "--contrast-clr": "252, 252, 252",
      "--light-contrast-clr": "210, 210, 210",
      "--dark-contrast-clr": "168, 168, 168",
      "--light-text-clr": "126, 126, 126",
      "--text-clr": "84, 84, 84",
      "--dark-text-clr": "42, 42, 42",
      "--not-started-clr": "222, 73, 115",
      "--dark-not-started-clr": "80, 23, 65",
      "--pending-clr": "235, 173, 80",
      "--dark-pending-clr": "185, 133, 40",
      "--complete-clr": "147, 235, 96",
      "--dark-complete-clr": "112, 200, 46",
    },
    dark: {
      "--contrast-clr": "84, 84, 84",
      "--light-contrast-clr": "126, 126, 126",
      "--dark-contrast-clr": "42, 42, 42",
      "--light-text-clr": "210, 210, 210",
      "--text-clr": "252, 252, 252",
      "--dark-text-clr": "168, 168, 168",
      "--not-started-clr": "80, 23, 65",
      "--dark-not-started-clr": "222, 73, 115",
      "--pending-clr": "185, 133, 40",
      "--dark-pending-clr": "235, 173, 80",
      "--complete-clr": "112, 200, 46",
      "--dark-complete-clr": "147, 235, 96",
    },
  };

  const defaultTheme = {
    themeText: "Default",
    light: {
      "--pri-clr": "13, 183, 219",
      "--sec-clr": "233, 85, 185",
      "--acc-clr": "75, 153, 185",
      ...setValues.light,
    },
    dark: {
      "--pri-clr": "8, 126, 189",
      "--sec-clr": "192, 14, 185",
      "--acc-clr": "15, 32, 185",
      ...setValues.dark,
    },
  };

  const oceanSpray = {
    themeText: "Ocean Spray",
    light: {
      "--pri-clr": "134, 185, 233",
      "--sec-clr": "113, 253, 214",
      "--acc-clr": "42, 215, 234",
      ...setValues.light,
    },
    dark: {
      "--pri-clr": "33, 46, 59",
      "--sec-clr": "26, 51, 43",
      "--acc-clr": "21, 53, 58",
      ...setValues.dark,
    },
  };

  const evergreenMist = {
    themeText: "Evergreen Mist",
    light: {
      "--pri-clr": "134, 203, 106",
      "--sec-clr": "113, 180, 141",
      "--acc-clr": "186, 151, 144",
      ...setValues.light,
    },
    dark: {
      "--pri-clr": "43, 65, 34",
      "--sec-clr": "39, 58, 47",
      "--acc-clr": "74, 61, 58",
      ...setValues.dark,
    },
  };

  const nocturnalSerenity = {
    themeText: "Nocturnal Serenity",
    light: {
      "--pri-clr": "188, 248, 236",
      "--sec-clr": "249, 199, 132",
      "--acc-clr": "191, 215, 181",
      ...setValues.light,
    },
    dark: {
      "--pri-clr": "47, 62, 59",
      "--sec-clr": "87, 70, 46",
      "--acc-clr": "59, 67, 54",
      ...setValues.dark,
    },
  };

  const mauveEclipse = {
    themeText: "Mauve Eclipse",
    light: {
      "--pri-clr": "221, 196, 221",
      "--sec-clr": "255, 251, 189",
      "--acc-clr": "217, 89, 76",
      ...setValues.light,
    },
    dark: {
      "--pri-clr": "88, 78, 88",
      "--sec-clr": "89, 87, 67",
      "--acc-clr": "97, 38, 33",
      ...setValues.dark,
    },
  };

  const stellarAurora = {
    themeText: "Stellar Aurora",
    light: {
      "--pri-clr": "145, 166, 255",
      "--sec-clr": "255, 136, 220",
      "--acc-clr": "250, 255, 127",
      ...setValues.light,
    },
    dark: {
      "--pri-clr": "57, 65, 128",
      "--sec-clr": "128, 68, 110",
      "--acc-clr": "125, 128, 63",
      ...setValues.dark,
    },
  };

  const volcanicTwilight = {
    themeText: "Volcanic Twilight",
    light: {
      "--pri-clr": "255, 64, 0",
      "--sec-clr": "254, 212, 231",
      "--acc-clr": "242, 183, 159",
      ...setValues.light,
    },
    dark: {
      "--pri-clr": "128, 32, 0",
      "--sec-clr": "89, 74, 81",
      "--acc-clr": "84, 63, 53",
      ...setValues.dark,
    },
  };

  const royalNoir = {
    themeText: "Royal Noir",
    light: {
      "--pri-clr": "224, 26, 79",
      "--sec-clr": "253, 231, 76",
      "--acc-clr": "184, 184, 243",
      ...setValues.light,
    },
    dark: {
      "--pri-clr": "112, 13, 40",
      "--sec-clr": "89, 81, 38",
      "--acc-clr": "92, 92, 121",
      ...setValues.dark,
    },
  };

  const skyBound = {
    themeText: "Skybound",
    light: {
      "--pri-clr": "89, 210, 254",
      "--sec-clr": "168, 182, 214",
      "--acc-clr": "244, 213, 141",
      ...setValues.light,
    },
    dark: {
      "--pri-clr": "11, 19, 43",
      "--sec-clr": "28, 37, 65",
      "--acc-clr": "58, 80, 107",
      ...setValues.dark,
    },
  };

  const autumnGrove = {
    themeText: "Autumn Grove",
    light: {
      "--pri-clr": "255, 170, 90",
      "--sec-clr": "255, 227, 129",
      "--acc-clr": "206, 194, 136",
      ...setValues.light,
    },
    dark: {
      "--pri-clr": "128, 85, 45",
      "--sec-clr": "87, 70, 46",
      "--acc-clr": "67, 63, 47",
      ...setValues.dark,
    },
  };

  const duskyRose = {
    themeText: "Dusky Rose",
    light: {
      "--pri-clr": "211, 154, 178",
      "--sec-clr": "251, 75, 78",
      "--acc-clr": "245, 255, 144",
      ...setValues.light,
    },
    dark: {
      "--pri-clr": "117, 77, 89",
      "--sec-clr": "125, 37, 39",
      "--acc-clr": "123, 128, 72",
      ...setValues.dark,
    },
  };

  return {
    Default: defaultTheme,
    "Ocean Spray": oceanSpray,
    "Evergreen Mist": evergreenMist,
    "Nocturnal Serenity": nocturnalSerenity,
    "Mauve Eclipse": mauveEclipse,
    "Stellar Aurora": stellarAurora,
    "Volcanic Twilight": volcanicTwilight,
    "Royal Noir": royalNoir,
    Skybound: skyBound,
    "Autumn Grove": autumnGrove,
    "Dusky Rose": duskyRose,
  };
}
