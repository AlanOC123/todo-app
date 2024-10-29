import createButton from "../../../shared/components/createButton";
import createTaskModule from "../../createTaskModule";

export default function createTaskButton() {
  const element = createButton("Create Task");

  element.addEventListener("click", () =>
    createTaskModule({ sortByOption: null, projectName: null })
  );

  return element;
}
