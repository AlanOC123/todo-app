import createElement from "../../../utils/classes/createElement";
import ElementData from "../../../utils/classes/ElementData";
import settingsHeader from "./settingsHeader";
import settingsNameEntry from "./settingsNameEntry";
import settingsPictureEntry from "./settingsPictureEntry";
import settingsThemeEntry from "./settingsThemeEntry";

export default function settingsPage() {
  const containerData = new ElementData(
    "div",
    "settings",
    {
      id: "settings",
    },
    [
      settingsHeader(),
      settingsPictureEntry(),
      settingsNameEntry(),
      settingsThemeEntry(),
    ]
  ).createElementData();

  return createElement(containerData);

};