const valueMap =
{
  Ascending: 
  [
    'Low to High', 
    'Not-Started to Overdue', 
    'Easy to Hard'
  ],
  Descending:
  [
    'High to Low', 
    'Overdue to Not-Started', 
    'Hard to Easy'
  ],
};

const keyMap =
{
  All: { 
    sortingValues: {}, 
    colorScheme: {}, 
  },
  Status:
  {
    sortingValues:
    {
      'Not Started': 1,
      'In Progress': 2,
      Complete: 3,
      Overdue: 4,
    },
    colorScheme:
    {
      'Not Started': 'red',
      'In Progress': 'yellow',
      Complete: 'green',
      Overdue: 'deep-red',
    }
  },
  Priority:
  {
    sortingValues:
    {    
      Low: 1,
      Medium: 2,
      High: 3,
    },
    colorScheme:
    {
      Low: 'green',
      Medium: 'yellow',
      High: 'red',
    }
  },
  Difficulty:
  {
    sortingValues:
    {
      Easy: 1,
      Medium: 2,
      Hard: 3,
    },
    colorScheme:
    {
      Easy: 'green',
      Medium: 'yellow',
      Hard: 'red',
    }
  },
};

const filterMap =
{
  Status: (task) => task.getTaskStatus(),
  Priority: (task) => task.getTaskPriority(),
  Difficulty: (task) => task.getTaskDifficulty(),
  Category: (task) => task.getTaskCategory(),
};

export { valueMap, keyMap, filterMap };