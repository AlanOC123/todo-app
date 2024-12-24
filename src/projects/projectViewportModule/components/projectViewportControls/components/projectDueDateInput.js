import ElementData from "../../../../../shared/utils/ElementData";
import { format, parse } from "date-fns";
import changeProjectDueDate from "../utils/changeProjectDueDate";
import projectsState from "../../../../shared/utils/projectsState";

export default function projectDueDateInput()
{
  const projectClass = projectsState.getActiveProject();

  if (!projectClass)
  {
    return;
  };

  const minDate = format(parse(projectClass.getProjectDueDate(), 'dd-MM-yyyy', new Date()), 'yyyy-MM-dd');

  const element = new ElementData
  (
    'input',
    'change-project-due-date-input',
    {
      type: 'date',
      min: minDate,
      value: 'dd-MM-yyyy',
    },
    []
  ).renderElement();

  function elementChanged()
  {
    if (!element.checkValidity())
    {
      return;
    }
    changeProjectDueDate(element, projectClass);
  };

  element.onchange = elementChanged;

  return element;
}