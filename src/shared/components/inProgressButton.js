import iconContainer from "./icon";
import iconsMap from "../utils/iconsMap";

export default function inProgressButton(optionText = iconsMap.create.label) 
{
  return iconContainer(iconsMap.hourglass.icon, optionText);
};