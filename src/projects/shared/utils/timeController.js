import projectsPageEventsManager from "../events/projectsPageEventsManager";
import projectPageEvents from "../events/projectsPageEvents";

export default (function timeController()
{
  let interval = null;

  function startInterval()
  {
    stopInterval();

    interval = setInterval
    (
      () => projectsPageEventsManager.emit(projectPageEvents.viewportRefreshed),
      300000
    );
  }

  function stopInterval()
  {
    if (interval) clearInterval(interval);
    interval = null;
  }

  return { startInterval, stopInterval };
})();