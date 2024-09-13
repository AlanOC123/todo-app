import EventsBus from "./eventBus";
import events from "./events";

export default function timeController(intervalDuration = 1000) {
  let interval;

  function start() {
    if (interval) return;
    interval = setInterval(() => {
      EventsBus.emit(events.updateTime, new Date());
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
    stop
  }
}
