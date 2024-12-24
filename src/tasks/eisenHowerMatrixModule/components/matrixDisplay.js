import ElementData from "../../../shared/utils/ElementData";
import taskPageState from "../../shared/utils/taskPageState";
import filterTasksIn7Days from "../utils/filterTasksIn7Days";
import taskGroupingCard from '../../shared/components/taskGroupingCard/taskGroupingCard';
import sortEisenhowerHeadings from "../utils/sortEisenhowerHeadings";

export default function matrixDisplay()
{
  const element = new ElementData
  (
    'div',
    'matrix-display',
    {},
    []
  ).renderElement();

  function renderElement()
  {
    const allTasks = taskPageState.getAllTasks();
    const filteredTasks = filterTasksIn7Days(allTasks);

    const sortingHeaders = 
    [
      'Important and Urgent', 
      'Important and Not Urgent', 
      'Urgent and Not Important',
      'Not Urgent and Not Important'
    ]

    const IDObject = { sortByKey: '', sortByValue: '' };

    const colorScheme = 
    {
      'Important and Urgent': 'green',
      'Important and Not Urgent': 'yellow',
      'Urgent and Not Important': 'orange',
      'Not Urgent and Not Important': 'red'
    }

    const sortedTasks = sortEisenhowerHeadings(filteredTasks, sortingHeaders);

    console.log(sortedTasks)

    for (const heading in sortedTasks)
    {
      const card = taskGroupingCard(heading, IDObject, sortedTasks[heading], colorScheme)

      card.removeChild(card.lastChild);
      element.append(card);
    }
  };

  renderElement();
  return element;
}