import iconContainer from "./icon";
import iconsMap from "../utils/iconsMap";

export default function expandButton(optionText = iconsMap.options.label) {
  return iconContainer(iconsMap.options.icon, optionText);
}
