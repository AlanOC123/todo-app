import selectInput from "../../../../shared/components/selectInput";
import changeTaskFiltering from "../utils/changeTaskFiltering";
import taskPageState from "../../../../shared/utils/taskPageState";

export default function filterTaskInput()
{
  const options = 
  {
    default:
    {
      heading: 'None',
      values: ['--Select Filter--'],
    },
    all:
    {
      heading: 'All',
      values: ['All'],
    },
    priority:
    {
      heading: 'Priority',
      values: ['High', 'Low', 'Medium']
    },
    status:
    {
      heading: 'Status',
      values: ['Overdue', 'Not-Started', 'In-Progress', 'Complete'],
    },
    difficulty:
    {
      heading: 'Difficulty',
      values: ['High', 'Medium', 'Low'],
    }
  };

  const sortByOption = taskPageState.getTaskSorting().split(' ')[0];
  let sortedOptionSelected = null;


  for (const [option, { heading, values }] of Object.entries(options))
  {
    const isDefault = sortByOption === 'All' || sortByOption === 'None';
    if (sortByOption.replace(':', '') === heading && !isDefault)
    {
      sortedOptionSelected = option;
    }
  }

  if(sortedOptionSelected) delete options[sortedOptionSelected];

  const element = selectInput('filter-task-input', options, '--Select Filter--');

  element.onchange = changeTaskFiltering;

  return element;
}