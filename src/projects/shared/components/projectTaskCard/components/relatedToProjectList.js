import ElementData from "../../../../../shared/utils/ElementData";
import setProjectRelatedTo from "../utils/setProjectRelatedTo";
import populateRelatedProjects from "../utils/populateRelatedProjects";

export default function relatedToProjectList()
{
  const element = new ElementData
  (
    'select',
    'task-name-display',
    {
      id: 'related-projects-list'
    },
    []
  ).renderElement();

  populateRelatedProjects(element);

  function valueChanged()
  {
    setProjectRelatedTo(element);
  }

  element.onchange = valueChanged

  return element;
};