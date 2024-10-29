import TaskClass from "../../../tasks/shared/utils/TaskClass";
import getDatesInCurrentMonth from "../../../calendar/shared/utils/getDatesInCurrentMonth";
import taskValues from '../../shared/utils/taskValues';

const titleArray = 
[
  'This is a short sentance',
  'title',
  'Other title',
  'Do this',
  'Do that',
  'Dont do this until you have done the other thing'
];

const descriptionArray =
[
  'This is an example of a short description',
  'This is an example of a medium description. This one is longer',
  'This is an example of a long description. This one is longer again as it includes far more words than the other ones',
]

const category = taskValues.category.textHeadings;
const priority = taskValues.priority.textHeadings;
const status = taskValues.status.textHeadings;

const datesArray = getDatesInCurrentMonth();

const testTasks = [];

for (let i = 0; i < 100; i++) 
{
  testTasks.push
  (
    new TaskClass
    (
      randomItem(titleArray),
      randomItem(datesArray),
      randomItem(datesArray),
      randomItem(priority),
      randomItem(category),
      randomItem(status),
      randomItem(descriptionArray)
    )
  )
}

function randomItem(array)
{
  return array[Math.floor(Math.random() * array.length)];
}

export default testTasks;
