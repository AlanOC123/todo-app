import projectTaskCardName from "../components/projectTaskCardName";

export default function changeprojectTaskName(inputElement, projectTaskClass) {
  if (!inputElement || !projectTaskClass) return;

  if (!inputElement.value) {
    inputElement.classList.add("error");
    inputElement.focus();
    return;
  }

  projectTaskClass.setTaskName(inputElement.value);

  if (projectTaskClass.getTaskName() === "Type Task Name") {
    inputElement.classList.add("error");
    inputElement.focus();
    return;
  }
  inputElement.replaceWith(projectTaskCardName(projectTaskClass));
}
