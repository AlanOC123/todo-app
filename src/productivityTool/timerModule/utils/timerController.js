import productivityToolEvents from "../../shared/events/productivityToolEvents";
import productivityToolEventManager from "../../shared/utils/productivityToolEventManager";
import productivityState from "../../shared/utils/productivityToolState";
import timerButtonValues from "./timerButtonValues";
import pauseButton from "../components/pauseButton";
import playButton from "../components/playButton";
import updateTimerDisplay from "./updateTimerDisplay";

export default (function timerController() 
{
  let interval;

  const timerData =
  {
    buttonText: '',
    displayText: '',
    percentage: '',
  }

  function startTimer()
  {
    if (interval)
    {
      stopTimer();
    };

    const playButtonElement = document.querySelector('#play-button');
    if (playButtonElement)
    {
      playButtonElement.replaceWith(pauseButton());
    }

    productivityState.timer.isActive = true;

    interval = setInterval(timerInterval, 1000);
  }

  function stopTimer()
  {
    const { isActive, isPaused, isResting, isRepeated } = productivityState.timer;
    const pauseButtonElement = document.querySelector('#pause-button');
    if (pauseButtonElement)
    {
      pauseButtonElement.replaceWith(playButton());
    }

    if (interval)
    {
      clearInterval(interval);
    }

    interval = null;

    if (isPaused)
    {
      return;
    }

    resetTimer();

    if (!isRepeated)
    {
      timerData.buttonText = 'Timer Complete';
      timerData.displayText = 'Complete';
      timerData.percentage = 100;
      productivityToolEventManager.emit(productivityToolEvents.timerCompleted, timerData);
    }
  }

  function resetTimer()
  {
    const originalTime = productivityState.timer.currentTimeIndex;
    const stateObject = 
    [...timerButtonValues.values()].find
    (
      obj => obj.textValue === originalTime
    );

    if (stateObject)
    {
      productivityState.timer.currentTimeSet = stateObject.totalTime
      productivityState.timer.currentTimeOn = stateObject.timeOn
      productivityState.timer.currentTimeOff = stateObject.timeOff
      productivityState.timer.isActive = false;
      productivityState.timer.isResting = false;
      productivityState.timer.isPaused = false;
    } else {
      console.error('Repeat set but Timer not found');
    }
  }

  function repeatTimer()
  {
    stopTimer();
    startTimer();
  }

  function pauseTimer()
  {
    const 
    { 
      currentTotalTime,
      currentTimeSet
    } = productivityState.timer;
    const percentage = (currentTimeSet / currentTotalTime) * 100;
    timerData.buttonText = 'Timer Paused';
    timerData.displayText = 'Paused';
    timerData.percentage = percentage;
    productivityToolEventManager.emit(productivityToolEvents.timerUpdated, timerData);
  }

  function timerInterval()
  {
    const 
    { 
      currentTimeSet, 
      currentTimeOn, 
      currentTotalTime,
      isResting,
      isRepeated, 
      isActive,
    } = productivityState.timer;

    if (currentTotalTime === 0 || !isActive)
    {
      return;
    }

    if (currentTimeSet === 0)
    {
      if (isRepeated)
      {
        repeatTimer();
        return;
      } else {
        productivityState.timer.isComplete = true;
        stopTimer();
        return;
      }
    }

    productivityState.timer.currentTimeSet--;
    const percentage = (productivityState.timer.currentTimeSet / currentTotalTime) * 100;
    timerData.displayText = timerData.buttonText = updateTimerDisplay();
    timerData.percentage = percentage;
    productivityToolEventManager.emit(productivityToolEvents.timerUpdated, timerData);

    if (currentTimeOn > 0)
    {
      productivityState.timer.currentTimeOn--;
      return;
    }

    if (isResting)
    {
      productivityState.timer.currentTimeOff--;
      return;
    }

    if (currentTimeOn === 0)
    {
      productivityState.timer.isResting = true;
      productivityState.timer.currentTimeOff--;
      return;
    }
  }

  productivityToolEventManager.on(productivityToolEvents.startTimer, startTimer);
  productivityToolEventManager.on(productivityToolEvents.stopTimer, stopTimer);
  productivityToolEventManager.on(productivityToolEvents.pauseTimer, stopTimer, pauseTimer);
})()