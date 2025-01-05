import ElementData from "../../../utils/ElementData";
import iconContainer from "../../../shared/components/icon";
import iconsMap from "../../../shared/utils/iconsMap";
import pictureInput from "../../../shared/components/pictureInput";
import getImageFromInput from '../../../shared/utils/getImageFromInput';

export default function selectUserImage(newUser) {
  const inputElement = pictureInput("select-image-input", "select-image-input");
  const editIcon = iconContainer(iconsMap.edit.icon, null);

  editIcon.classList.add("edit-image");

  const element = new ElementData(
    "label",
    "select-image",
    {
      htmlFor: "select-image-input",
    },
    [inputElement, editIcon]
  ).renderElement();

  element.style.backgroundImage = `url(${newUser.image})`;

  function elementChanged(event)
  {
    getImageFromInput(event)
    .then((res) => newUser.image = res)
    .then(() => element.style.backgroundImage = `url(${newUser?.image})`);
  }

  inputElement.onchange = elementChanged;

  return element;
}
