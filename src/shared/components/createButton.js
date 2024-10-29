import iconContainer from "./icon";
import iconsMap from "../utils/iconsMap";

export default function createButton(optionText = iconsMap.create.label) 
{
  return iconContainer(iconsMap.create.icon, optionText);
};