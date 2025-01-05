import { appEvents, appEventsManager } from "../../events/appEvents";

export default function timeController(intervalDuration = 1000) {
  let interval;

  function start() {
    if (interval) return;
    interval = setInterval(() => {
      globalEventsManager.emit(globalEvents.preserveSettings);
    }, intervalDuration);
  }

  function stop() {
    if (interval) {
      clearInterval(interval);
      interval = null;
    }
  }

  globalEventsManager.on(globalEvents.sessionStarted, start);
  globalEventsManager.on(globalEvents.sessionEnded, stop);

  return {
    start,
    stop,
  };
}
