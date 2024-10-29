export default function setTaskCardClass({ status, priority })
{
  const classMap = {
      'Not-Started': "not-started-status",
      Pending: "pending-status",
  };

  const priorityMap = {
    Low: 'low-priority',
    Medium: 'medium-priority',
    High: 'high-priority'
  };

  if (status === 'Overdue') { return 'overdue' }
  if (status === 'Complete') { return 'complete' }

  return `${classMap[status]} ${priorityMap[priority]}`;
}