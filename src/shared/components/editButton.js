import iconsMap from "../../shared/utils/iconsMap";
import iconContainer from "./icon";

export default function editButton(optionText = iconsMap.edit.label) {
  return iconContainer(iconsMap.edit.icon, optionText);
}
