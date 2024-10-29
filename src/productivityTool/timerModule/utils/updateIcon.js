import productivityState from "../../shared/utils/productivityToolState";

export default function updateIcon(icon)
{
  const isToolActive = document.querySelector('#productivity-tool-modal').classList.contains('active');

  if (isToolActive)
  {
    icon.style.color = 'rgba(var(--pri-clr))';
    return;
  }

  const { isActive, isResting, isComplete } = productivityState.timer;

  if (isResting)
  {
    icon.style.color = 'rgba(var(--not-started-clr))';
    return;
  }

  if (isActive)
  {
    icon.style.color = 'rgba(var(--complete-clr))';
    return;
  }

  if (isComplete)
  {
    icon.style.color = 'rgba(var(--pri-clr))';
    return;
  }
}