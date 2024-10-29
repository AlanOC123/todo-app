import iconContainer from "./icon";
import iconsMap from "../utils/iconsMap";

export default function deleteButton(optionText = iconsMap.delete.label) {
  return iconContainer(iconsMap.delete.icon, optionText);
}
