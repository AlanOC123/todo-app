import ElementData from "../../../shared/utils/ElementData";
import label from "../../../shared/components/label";
import { textInput } from "../../../shared/components/textInput";

export default function firstNameField()
{
  return new ElementData
  (
    'div',
    'enter-first-name',
    {},
    [
      label('First Name', 'first-name'),
      textInput
      (
        'first-name', 
        'first-name',
        'Type First Name',
        '30'
      )
    ]
  ).renderElement();
}