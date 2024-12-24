import ElementData from "../../../../../shared/utils/ElementData";
import thoughtBubbleEventsManager from "../../../events/thoughtBubbleEventsManager";
import thoughtBubbleEvents from "../../../events/thoughtBubbleEvents";
import projectsState from "../../../../shared/utils/projectsState";
import projectsPageEventsManager from "../../../../shared/events/projectsPageEventsManager";
import projectPageEvents from "../../../../shared/events/projectsPageEvents";

export default function filterButton()
{
  const sliderButton = new ElementData
  (
    'div',
    'slider-button',
    {},
    []
  ).renderElement();

  const silderBody = new ElementData
  (
    'div',
    'slider-body',
    {},
    [
      sliderButton
    ]
  ).renderElement();

  const element = new ElementData
  (
    'div',
    'thought-bubble-filter-button',
    {},
    [
      silderBody,
      new ElementData
      (
        'p',
        'slider-label',
        {},
        [ 'My Thoughts' ]
      ).renderElement(),
    ]
  ).renderElement();

  function elementClicked()
  {
    element.classList.toggle('filter-active');

    const activeProject = projectsState.getActiveProject();

    if (!activeProject) return;

    if (element.classList.contains('filter-active'))
    {
      activeProject.setProjectThoughtBubbleFilter('My Thoughts');
    } else
    {
      activeProject.setProjectThoughtBubbleFilter('All Thoughts');
    };

    thoughtBubbleEventsManager.emit(thoughtBubbleEvents.filterAdded);
  }

  function editClass()
  {
    const activeProject = projectsState.getActiveProject();
    if (!activeProject)
    {
      element.classList.remove('filter-active');
      return;
    };

    if (activeProject.getProjectThoughtBubbleFilter() === 'All Thoughts')
    {
      element.classList.remove('filter-active');
    } else
    {
      element.classList.add('filter-active');
    }
  }

  editClass();
  element.onclick = elementClicked;
  projectsPageEventsManager.on(projectPageEvents.projectSelected, editClass);

  return element;
}