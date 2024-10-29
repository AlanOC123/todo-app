import iconContainer from "./icon";
import iconsMap from "../../shared/utils/iconsMap";

export default function confirmButton(optionText = iconsMap.confirm.label) {
  return iconContainer(iconsMap.confirm.icon, optionText);
}
