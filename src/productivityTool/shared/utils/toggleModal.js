import calculatorButton from "../components/calculatorButton";
import timerButton from '../components/timerButton';
import productivityToolEventManager from "./productivityToolEventManager";
import productivityToolEvents from "../events/productivityToolEvents";

export default function toggleModal(event)
{

  const isModal = event.target.id === 'productivity-tool-modal';
  const isButton = event.target.classList.contains('icon');

  if (!isModal && !isButton)
  {
    return;
  };

  const modal = document.querySelector('#productivity-tool-modal');

  if (modal.classList.contains('active') && isButton) 
  {
  return;
  } else if (isButton)
  {
    modal.classList.add('active');
    productivityToolEventManager.emit(productivityToolEvents.calculatorDisplayHistoryUpdated);
  } else if (isModal) 
  {
    modal.classList.remove('active');
    productivityToolEventManager.emit(productivityToolEvents.calculatorDisplayHistoryUpdated);
  } else 
  {
    return
  }
}