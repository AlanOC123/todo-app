import ElementData from "../../../../../shared/utils/ElementData";
import { format, parse } from "date-fns";
import changeProjectDueDate from "../utils/changeProjectDueDate";

export default function dueDateInput(projectClass)
{
  if (!projectClass)
  {
    return;
  };

  const minDate = format(new Date(), 'yyyy-MM-dd');

  const element = new ElementData
  (
    'input',
    'project-card-due-date-input',
    {
      type: 'date',
      min: minDate,
      value: 'dd-MM-yyyy',
    },
    []
  ).renderElement();

  function elementChanged(event)
  {
    event.stopPropagation();
    if (!element.checkValidity())
    {
      return;
    }
    changeProjectDueDate(element, projectClass);
  };

  element.onchange = elementChanged;

  return element;
}