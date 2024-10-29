import formModal from "../shared/components/form/formModal";
import formBody from "../shared/components/form/formBody";
import formHeader from "../shared/components/form/formHeader";
import testTasks from "./shared/utils/testTasks";
import editTaskTitle from "./shared/components/editTaskTitle/editTaskTitle";
import editTaskDate from "./shared/components/editTaskDate/editTaskDate";
import editTaskCategory from "./shared/components/editTaskCategory/editTaskCategory";
import editTaskStatus from "./shared/components/editTaskStatus/editTaskStatus";
import editTaskPriority from "./shared/components/editTaskPriority/editTaskPriority";
import editTaskDescription from "./shared/components/editTaskDescription/editTaskDescription";
import { button } from "../shared/components/button";
import removeModal from "../shared/utils/removeModal";

export default function editTaskModule(event) {
  const target = event.target.closest(".task-card").id;
  const task = testTasks.find((task) => task.id === target);
  const confirmButton = button("Confirm Edits");
  confirmButton.addEventListener("click", removeModal);

  const constructorObject = {
    className: {
      modalClassName: "form-modal",
    },
    taskID: task.id,
    projectID: null,
    components:
    [
      formBody(
        formHeader("Edit Tasks"),
        editTaskTitle(task),
        editTaskDescription(task),
        editTaskDate(task),
        editTaskCategory(task),
        editTaskStatus(task),
        editTaskPriority(task),
        confirmButton
      )
    ]
  };

  const taskDisplay = document.querySelector("#tasks");
  taskDisplay.append(formModal(constructorObject));
}
