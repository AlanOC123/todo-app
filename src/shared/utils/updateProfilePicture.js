import appState from "../../data/appState";
import placeholderImage from "../assets/placeholder-image.jpeg";

export default function updateProfilePicture(previewElement) {
  const src = placeholderImage;
  previewElement.style.backgroundImage = `url(${src})`;
}
