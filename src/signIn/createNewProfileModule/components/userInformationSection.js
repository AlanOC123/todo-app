import ElementData from "../../../utils/ElementData";
import selectUserImage from "./selectUserImage";
import selectUserName from "./selectUserName";
import newUserButtons from "./newUserButtons";

export default function userInformationSection(placeholderUser)
{
  return new ElementData
  (
    'div',
    'create-user-information',
    {},
    [
      selectUserImage(placeholderUser),
      selectUserName(placeholderUser),
      newUserButtons(placeholderUser),
    ]
  ).renderElement();
}