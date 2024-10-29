import ElementData from "../../../shared/utils/ElementData";
import label from "../../../shared/components/label";
import { textInput } from "../../../shared/components/textInput";

export default function lastNameField()
{
  return new ElementData
  (
    'div',
    'enter-last-name',
    {},
    [
      label('Last Name', 'last-name'),
      textInput
      (
        'last-name', 
        'last-name',
        'Type Last Name',
        '40'
      )
    ]
  ).renderElement();
}