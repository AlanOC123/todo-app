import storageModule from "../../../shared/utils/storageModule";
import placeholder from '../../../shared/assets/placeholder-image.jpeg'

export default function updateNavMenuImage(element)
{
  const base64 = storageModule.getSettings('picture') || placeholder;
  element.style.backgroundImage = `url(${base64})`;
}