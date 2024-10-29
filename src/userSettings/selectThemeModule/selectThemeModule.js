import selectThemeContainer from "./components/selectThemeContainer";
import selectThemeList from "./components/selectThemeList";
import selectThemeHeader from "./components/selectThemeHeader";
import eventsManager from "../../shared/utils/eventsManager";
import events from "../../shared/events/events";
import applyTheme from "../../shared/utils/applyTheme";

export default (function selectThemeModule() {
  eventsManager.on(events.themeChanged, applyTheme);

  return selectThemeContainer
  (
    selectThemeHeader(),
    selectThemeList(),
  )
})()