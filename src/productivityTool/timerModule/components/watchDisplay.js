import ElementData from "../../../shared/utils/ElementData";
import productivityToolEventManager from "../../shared/utils/productivityToolEventManager";
import productivityToolEvents from "../../shared/events/productivityToolEvents";
import animateWatch from "../utils/animateWatch";

export default function watchDisplay()
{
  const radius = 98;
  const circumference = 2 * Math.PI * radius;
  const size = 240;
  const midpoint = size / 2;

  const progressBar = new ElementData
  (
    'circle',
    'progress-bar',
    {
      cx: `${midpoint}`,
      cy: `${midpoint}`,
      r: `${radius}`,
      transform: 'rotate(-90, 120, 120)',
      'stroke-dasharray': `${circumference}`,
    }
  ).renderElement();

  const progressTrack = new ElementData
  (
    'circle',
    'progress-track',
    {
      cx: `${midpoint}`,
      cy: `${midpoint}`,
      r: `${radius}`
    },
    []
  ).renderElement();


  const element = new ElementData
  (
    'svg',
    'timer-watch',
    {
      width: `${size}`,
      height: `${size}`,
      viewBox: `0 0 ${size} ${size}`,
    },
    [
      progressTrack,
      progressBar
    ]
  ).renderElement();

  function updateWatch({ percentage })
  {
    animateWatch(percentage, circumference, progressBar, progressTrack)
  }

  productivityToolEventManager.on(productivityToolEvents.timerUpdated, updateWatch);
  productivityToolEventManager.on(productivityToolEvents.timerCompleted, updateWatch);

  return element;
}