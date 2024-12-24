import projectState from '../../../../shared/utils/projectsState';
import ThoughtBubbleClass from '../../../../shared/utils/ThoughtBubbleClass';
import thoughtBubbleEventsManager from '../../../events/thoughtBubbleEventsManager';
import thoughtBubbleEvents from '../../../events/thoughtBubbleEvents';

export default function addThought()
{
  const textAreaInput = document.querySelector('.thought-bubble-text-input');

  if (!textAreaInput || !textAreaInput.value) return;

  const activeProject = projectState.getActiveProject();

  if (!activeProject)
  {
    textAreaInput.value = '';
    return;
  }

  const newThought = new ThoughtBubbleClass(activeProject, false);
  newThought.setThoughtContent(textAreaInput.value.trim());

  activeProject.addThought(newThought);
  textAreaInput.value = '';
  textAreaInput.setSelectionRange(0, 0);
  thoughtBubbleEventsManager.emit(thoughtBubbleEvents.messageAdded, { newThought: newThought });
}