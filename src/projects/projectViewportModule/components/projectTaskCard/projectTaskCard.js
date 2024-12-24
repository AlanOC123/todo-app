import ElementData from "../../../../shared/utils/ElementData";
import projectTaskName from "./components/projectTaskCardName";
import projectTaskCardCompleteButton from "./components/projectTaskCardCompleteButton";
import projectTaskCardPriority from "./components/projectTaskCardPriority";
import projectTaskCardDuration from "./components/projectTaskCardDuration";
import projectTaskCardDeleteButton from "./components/projectTaskCardDeleteButton";

export default function projectTaskCard(projectTaskClass) {
  return new ElementData("div", "project-task-card", {}, [
    projectTaskCardCompleteButton(projectTaskClass),
    projectTaskName(projectTaskClass),
    projectTaskCardPriority(projectTaskClass),
    projectTaskCardDuration(projectTaskClass),
    projectTaskCardDeleteButton(projectTaskClass),
  ]).renderElement();
}
