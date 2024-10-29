import findSortByOption from "./shared/utils/findSortByOption";
import TaskClass from "./shared/utils/TaskClass";
import formModal from "../shared/components/form/formModal";
import formBody from "../shared/components/form/formBody";
import formHeader from "../shared/components/form/formHeader";
import editTaskTitle from "./shared/components/editTaskTitle/editTaskTitle";
import editTaskDescription from "./shared/components/editTaskDescription/editTaskDescription";
import editTaskDate from "./shared/components/editTaskDate/editTaskDate";
import editTaskCategory from "./shared/components/editTaskCategory/editTaskCategory";
import editTaskStatus from './shared/components/editTaskStatus/editTaskStatus';
import editTaskPriority from "./shared/components/editTaskPriority/editTaskPriority";
import { button } from "../shared/components/button";
import testTasks from "./shared/utils/testTasks";
import createTask from "./shared/utils/createTask";

export default function createTaskModule({ sortByOption, projectName }) {
  let preGivenOption;
  let preGivenField;
  let preGivenID;
  let headerText = 'Create New Task';

  if (
    sortByOption &&
    sortByOption !== "All Tasks" &&
    !(sortByOption instanceof PointerEvent)
  ) {
    preGivenOption = sortByOption;
    preGivenField = findSortByOption(preGivenOption).sortByOption;
    preGivenID = findSortByOption(preGivenOption).sortByID;
    headerText = `Create New ${preGivenOption} ${preGivenField} Task`;
  }

  const task = new TaskClass();
  if (preGivenField && preGivenOption) {
    task[preGivenID] = preGivenOption
  }
  testTasks.push(task);
  const confirmButton = button('Create Task');
  confirmButton.addEventListener('click', () => createTask(task));

  const constructorObject = {
    className: {
      modalClassName: "form-modal",
    },
    taskID: task.id,
    projectID: null,
    components:
    [
      formBody(
        formHeader(headerText),
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

  taskDisplay.append(
    formModal(constructorObject)
  );
}
