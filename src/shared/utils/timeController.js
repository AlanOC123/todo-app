import EventsManager from "./eventsManager";
import events from "../events/events";

export default function timeController(intervalDuration = 1000) {
  let interval;

  function start() {
    if (interval) return;
    interval = setInterval(() => {
      EventsManager.emit(events.updateTime);
    }, intervalDuration);
  }

  function stop() {
    if (interval) {
      clearInterval(interval);
      interval = null;
    }
  }

  return {
    start,
    stop,
  };
}
