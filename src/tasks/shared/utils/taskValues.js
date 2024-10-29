const taskCardValues = 
{
  'all-tasks': 
  {
    sortByID: 'all-tasks',
    sortByText: 'All',
    textHeadings: [ 'All Tasks' ],
  },
  category: 
  {
    sortByID: 'category',
    sortByText: 'Category',
    textHeadings: 
    [
      'Health & Fitness',
      'Education',
      'Finance',
      'Social',
      'Professional',
    ],
  },
  status:
  {
    sortByID: 'status',
    sortByText: 'Status',
    textHeadings: 
    [
      'Overdue',
      'Not-Started',
      'Pending',
      'Complete'
    ],
  },
  priority:
  {
    sortByID: 'priority',
    sortByText: 'Priority',
    textHeadings: 
    [
      'High',
      'Medium',
      'Low'
    ],
  },
};

export default taskCardValues;