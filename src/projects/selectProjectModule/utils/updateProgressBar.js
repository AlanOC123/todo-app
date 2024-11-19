export default function updateProgressBar(circumference, project, progressBar, progressTrack)
{
  if (!project)
  {
    return;
  }

  const percentage = project.getProjectCompletionProgress();

  if (percentage === null)
  {
    progressBar.style.opacity = '0';
    progressTrack.style.opacity = '0';
    return;
  } else {
    progressBar.style.opacity = '1';
    progressTrack.style.opacity = '1';
  }

  const offset = circumference - (percentage / 100) * circumference;

  if (percentage === '100')
  {
    progressBar.classList.add('project-complete');
  } else
  {
    progressBar.classList.remove('project-complete');
  }

  progressBar.style.strokeDashoffset = offset;
}