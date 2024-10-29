import productivityState from "../../shared/utils/productivityToolState";

export default function animateWatch(percentage, circumference, progressBar, progressTrack)
{
  const { isActive, isPaused, isResting, isComplete } = productivityState.timer;
  const offset = circumference - (percentage / 100) * circumference;
  progressBar.style.strokeDashoffset = offset;

  if (isComplete) 
  {
    progressBar.style.stroke = 'rgba(var(--complete-clr))';
    progressTrack.style.stroke = 'rgba(var(--complete-clr), 0.25)';
    progressTrack.style.filter = 'drop-shadow(0 0 0.4em rgba(var(--complete-clr), 1))';
    return;
  }

  if (!isActive && isPaused)
  {
    progressBar.style.stroke = 'rgba(var(--pending-clr))';
    progressTrack.style.stroke = 'rgba(var(--pending-clr), 0.25)';
    progressTrack.style.filter = 'drop-shadow(0 0 0.4em rgba(var(--pending-clr), 1))';
    return;
  }

  if (!isActive)
    {
      progressBar.style.stroke = 'rgba(var(--acc-clr))';
      progressTrack.style.stroke = 'rgba(var(--acc-clr), 0.25)';
      progressTrack.style.filter = 'drop-shadow(0 0 0.4em rgba(var(--acc-clr), 0.5))';
      return;
    }

  if (isResting)
  {
    progressBar.style.stroke = 'rgba(var(--not-started-clr))';
    progressTrack.style.stroke = 'rgba(var(--not-started-clr), 0.25)';
    progressTrack.style.filter = 'drop-shadow(0 0 0.4em rgba(var(--not-started-clr), 1))';
    return;
  }

  progressBar.style.stroke = 'rgba(var(--complete-clr))';
  progressTrack.style.stroke = 'rgba(var(--complete-clr), 0.25)';
  progressTrack.style.filter = 'drop-shadow(0 0 0.4em rgba(var(--complete-clr), 1))';
}