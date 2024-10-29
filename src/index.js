import "./shared/styles/shared.css";
import storageModule from "./shared/utils/storageModule";

async function runApp() {
  const { default: timeController } = await import(
    "./shared/utils/timeController"
  );
  const { default: dashboard } = await import("./dashboard/dashboard");
  const { default: eventsManager } = await import(
    "./shared/utils/eventsManager"
  );
  const { default: events } = await import("./shared/events/events");
  const { default: TimeManager } = await import("./shared/utils/timeManager");

  eventsManager.on(events.updateTime, TimeManager.updateTime);

  dashboard();

  const { default: productivityToolModule } = await import (
    './productivityTool/productivityToolModule'
  )

  const { default: dashboardEventsManager } = await import(
    "./dashboard/shared/utils/dashboardEventsManager"
  );
  const { default: dashboardEvents } = await import("./dashboard/shared/events/dashboardEvents");

  const { default: pageRouter } = await import("./shared/events/pageRouter");

  timeController().start();

  pageRouter();

  if (!storageModule.getSettings("init")) {
    dashboardEventsManager.emit(dashboardEvents.renderSettings);
  } else {
    dashboardEventsManager.emit(dashboardEvents.renderTasks);
  }
}

document.addEventListener("DOMContentLoaded", runApp);
