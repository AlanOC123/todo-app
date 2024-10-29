import productivityState from "../../shared/utils/productivityToolState";
import productivityToolEventManager from "../../shared/utils/productivityToolEventManager";
import productivityToolEvents from "../../shared/events/productivityToolEvents";

export default function activateTimer()
{
  if (productivityState.timer.currentTimeIndex === '')
  {
    productivityToolEventManager.emit(productivityToolEvents.falseStart);
    return;
  }

  productivityState.timer.isActive = true;
  productivityState.timer.isPaused = false;
  productivityState.timer.isComplete = false;
  productivityToolEventManager.emit(productivityToolEvents.startTimer);
  productivityToolEventManager.emit(productivityToolEvents.timerUpdated, { buttonText: 'Timer Started', displayText: 'Start' });
}