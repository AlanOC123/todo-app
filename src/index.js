import "./styles/common.css";
import storageModule from "./utils/dataProcessing/storageModule";

async function runApp() {
  const { default: rootPage } = await import("./components/common/rootPage");
  const { default: timeController } = await import(
    "./utils/events/common/timeController"
  );
  const { default: dashboardPage } = await import(
    "./components/dashboardComponents/dashboardPage"
  );
  const { default: EventsManager } = await import(
    "./utils/events/common/EventsManager"
  );
  const { default: events } = await import('./utils/events/common/events');
  const { default: TimeManager } = await import('./utils/stateManagement/common/TimeManager');

  EventsManager.on(events.updateTime, TimeManager.updateTime);

  rootPage.render();
  
  dashboardPage.render();

  const { default: pageRouter } = await import('./utils/events/common/pageRouter');

  EventsManager.emit(events.renderSettings);

  timeController().start();

  pageRouter();

  if (!storageModule.getSettings('init')) {
    EventsManager.emit(events.renderSettings);
  } else {
    EventsManager.emit(events.renderHome);
  };
}

document.addEventListener("DOMContentLoaded", runApp);
