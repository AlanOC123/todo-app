import ElementData from "../../../../shared/utils/ElementData";
import projectsState from '../../../shared/utils/projectsState';
import projectsPageEventsManager from "../../../shared/events/projectsPageEventsManager";
import projectPageEvents from "../../../shared/events/projectsPageEvents";
import thoughtBubbleEventsManager from "../../events/thoughtBubbleEventsManager";
import thoughtBubbleEvents from "../../events/thoughtBubbleEvents";
import emptyBubbleMessage from "../emptyBubbleMessage";
import groupingsCard from "./components/groupingsCard";

export default function thoughtBubbleViewport()
{
  let groupings = {};

  const element = new ElementData
  (
    'div',
    'thought-bubble-viewport',
    {},
    []
  ).renderElement();

  const wrapperElement = new ElementData
  (
    'div',
    'thought-bubble-viewport-wrapper',
    {},
    [ element ]
  ).renderElement();

  function renderElement()
  {
    groupings = {};

    element.classList.remove('empty');

    while (element.firstChild)
    {
      element.removeChild(element.firstChild);
    }

    const activeProject = projectsState.getActiveProject();

    if (!activeProject)
    {
      element.classList.add('empty');
      element.append(emptyBubbleMessage('No Project Selected'));
      return;
    };

    if (activeProject.getProjectName() === 'Type Project Name')
    {
      element.classList.add('empty');
      element.append(emptyBubbleMessage('No Project Selected'));
      return;
    }

    const allProjectThoughts = activeProject.getProjectThoughtBubble();

    if (allProjectThoughts.length === 0)
    {
      element.classList.add('empty');
      element.append(emptyBubbleMessage('No Thoughts'));
      return;
    };

    const viewportFilter = activeProject.getProjectThoughtBubbleFilter();
    let filteredThoughts;

    if (viewportFilter === 'All Thoughts') filteredThoughts = allProjectThoughts;

    if (viewportFilter === 'My Thoughts')
    {
      filteredThoughts = allProjectThoughts.filter
      (
        thoughtBubble => !thoughtBubble.getIsThoughtSystemGenerated(),
      )
    };

    if (filteredThoughts.length === 0)
    {
      element.classList.add('empty');
      element.append(emptyBubbleMessage('No Thoughts'));
      return;
    }

    filteredThoughts.forEach
    (
      thoughtBubble =>
      {
        const groupingHeading = thoughtBubble.getThoughtDay();
        groupings[groupingHeading] = groupings[groupingHeading] || [];
        groupings[groupingHeading].push(thoughtBubble.getThoughtCard());
      }
    )

    for (const heading in groupings)
    {
      element.append(groupingsCard(heading, groupings[heading]))
    };

    if (element.lastChild)
    {
      if (element.lastChild.classList.contains('empty-bubble-message')) return;
      element.lastChild.scrollIntoView({ behaviour: 'smooth', block: 'end' });
    };
  }

  function addThought({ newThought })
  {
    if (!newThought) return;
    renderElement()
  }

  function deleteThought({ selectedThought })
  {
    if (!selectedThought) return;

    renderElement();
  }

  renderElement({ filter: null });
  projectsPageEventsManager.on(projectPageEvents.projectSelected, renderElement);
  projectsPageEventsManager.on(projectPageEvents.projectNameChanged, renderElement);
  thoughtBubbleEventsManager.on(thoughtBubbleEvents.messageAdded, addThought);
  thoughtBubbleEventsManager.on(thoughtBubbleEvents.messageDeleted, deleteThought);
  thoughtBubbleEventsManager.on(thoughtBubbleEvents.filterAdded, renderElement);
  projectsPageEventsManager.on(projectPageEvents.viewportRefreshed, renderElement);
  return wrapperElement;
}