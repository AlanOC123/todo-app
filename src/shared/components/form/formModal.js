import ElementData from "../../utils/ElementData";
import removeModal from "../../utils/removeModal";

export default function formModal({ className, taskID, projectID, components}) 
{
  const componentList = Array.isArray(components) ? components : [components];
  const element = new ElementData(
    "div",
    className.modalClassName,
    {
      id: "form-modal",
      "data-task": taskID,
      "data-project": projectID,
    },
    [...componentList]
  ).renderElement();

  element.addEventListener("click", removeModal);

  return element;
}
