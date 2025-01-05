import ElementData from "../../utils/ElementData";
import userInformationSection from "./components/userInformationSection";
import selectUserThemes from "./components/selectUserThemes";

export default function createNewProfile(placeholderUser) 
{
  const element = new ElementData("div", "create-user", {}, [
    selectUserThemes(placeholderUser),
    userInformationSection(placeholderUser),
  ]).renderElement();

  return element;
}
