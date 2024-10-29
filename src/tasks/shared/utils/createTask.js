import deleteTask from "../../taskDisplayModule/components/taskCard/utils/deleteTask";

export default function createTask(task)
{
  const isCompleteTask = 
  (task.title !== 'Click Button Above to Edit')
  && (task.description !== 'Click Button Above to Edit')

  if (isCompleteTask) {
    task.createdAt = new Date().toISOString();
  } else {
    deleteTask(task);
  }
}