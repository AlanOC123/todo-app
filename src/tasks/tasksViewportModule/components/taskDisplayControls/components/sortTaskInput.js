import selectInput from "../../../../shared/components/selectInput";
import changeTaskSorting from "../utils/changeTaskSorting";
import taskPageState from "../../../../shared/utils/taskPageState";

export default function sortTaskInput()
{
  const options = 
  {
    default:
    {
      heading: 'None',
      values: ['--Select Sort--'],
    },
    all:
    {
      heading: 'All',
      values: ['All'],
    },
    priority:
    {
      heading: 'Priority',
      values: ['Low to High', 'High to Low'],
    },
    status:
    {
      heading: 'Status',
      values: ['Not-Started to Overdue', 'Overdue to Not-Started'],
    },
    difficulty:
    {
      heading: 'Difficulty',
      values: ['Easy to Hard', 'Hard to Easy'],
    }
  };

    const filterByOption = taskPageState.getTaskFiltering().split(' ')[0];
    let filteredOptionSelected = null;
  
  
    for (const [option, { heading, values }] of Object.entries(options))
    {
      const isDefault = filterByOption === 'All' || filterByOption === 'None';
      if (filterByOption.replace(':', '') === heading && !isDefault)
      {
        filteredOptionSelected = option;
      }
    }
  
    if(filteredOptionSelected) delete options[filteredOptionSelected];

  const element = selectInput('sort-task-input', options, '--Select Sort--');

  element.onchange = changeTaskSorting;

  return element;
}