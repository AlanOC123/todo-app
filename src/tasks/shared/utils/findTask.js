import testTasks from "../../../components/dashboardComponents/dashboardTasks/testTasks";

export default function findTasks(taskID)
{
  return testTasks.find(task => task.id === taskID);
}