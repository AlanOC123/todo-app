import EventsBus from "../../events/common/eventBus";
import events from "../../events/common/events";

export default function interactWithGradient() {
  let currX = 0;
  let currY = 0;
  let tgX = 0;
  let tgY = 0;

  const interactiveElement = document.querySelector('.interactive');

  function move() {
    currX += (tgX - currX) / 20;
    currY += (tgY - currY) / 20;
    interactiveElement.style.transform = `translate(${Math.round(currX)}px, ${Math.round(currY)}px)`;
    requestAnimationFrame(move);
  };

  window.addEventListener('mousemove', getCoordinates);

  function getCoordinates({ clientX, clientY }) {
    tgX = clientX;
    tgY = clientY;
  };

  move();

  EventsBus.on(events.gradientRemoved, () => {
    window.removeEventListener('mousemove', getCoordinates)
  });
};