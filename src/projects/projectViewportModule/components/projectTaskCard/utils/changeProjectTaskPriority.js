import projectTaskCardPriority from "../components/projectTaskCardPriority";

export default function changeProjectTaskPriority(inputElement, projectTaskClass) {
  if (!inputElement || !projectTaskClass) return;

  if (
    !inputElement.value ||
    inputElement.value === projectTaskClass.setTaskPriority()
  ) {
    inputElement.replaceWith(projectTaskCardPriority(projectTaskClass));
    return;
  }

  projectTaskClass.setTaskPriority(inputElement.value);
  inputElement.replaceWith(projectTaskCardPriority(projectTaskClass));
}
