import taskCardHeader from "./components/taskCardHeader";
import taskCardContainer from "./components/taskCardContainer";
import taskCardCategory from "./components/taskCardCategory";
import taskCardButtonsContainer from "./components/taskCardButtonsContainer";
import ElementData from "../../../../shared/utils/ElementData";

export default function taskCard(task)
{
  return taskCardContainer
      (
        task,
        taskCardCategory(task),
        taskCardHeader(task),
        taskCardButtonsContainer(),
      )
};