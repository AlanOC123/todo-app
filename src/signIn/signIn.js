import ElementData from "../utils/ElementData";
import selectProfile from "./shared/components/selectProfile";

export default function signIn()
{
  return new ElementData
  (
    'div',
    'sign-in',
    {},
    [
      selectProfile(),
    ]
  ).renderElement();
}