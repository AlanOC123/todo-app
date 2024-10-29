import productivityState from "../../shared/utils/productivityToolState";

export default function updateTimerDisplay(timerData)
{
  if (timerData)
  {
    return timerData.displayText;
  }

  const { currentTimeSet, isActive, currentTimeIndex } = productivityState.timer;

  if (currentTimeIndex === '')
  {
    return'Select Time Below';
  };

  if (!isActive)
  {
    return currentTimeIndex;
  };

  const hour = Math.floor(currentTimeSet / 3600).toString().padStart(2, '0');
  const minute = Math.floor(currentTimeSet / 3600 * 60 % 60).toString().padStart(2, '0');
  const second = Math.floor(currentTimeSet % 60).toString().padStart(2, '0');

  if (hour !== '00')
  {
    return`${hour} : ${minute} : ${second}`;
  } else if (hour === '00' && minute !== '00')
  {
    return `${minute} : ${second}`;
  } else
  {
    return `${second}`;
  };
}