import { button } from "../../../../../shared/components/button";
import createTaskModule from "../../../../createTaskModule";

export default function taskCardCreateButton(
  sortByValue = null,
  projectName = null
) {
  const element = button("Create Task +");
  element.id = sortByValue;
  element.addEventListener("click", () =>
    createTaskModule({ sortByOption: sortByValue, projectName: projectName })
  );
  return element;
}
