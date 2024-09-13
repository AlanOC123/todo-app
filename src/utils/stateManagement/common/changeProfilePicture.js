import placeholder from '../../../assets/placeholder-image.jpeg';

export default function changeProfilePicture(imageElement, file) {
  if (!file) {
    file = placeholder;
  }

  if (!imageElement) {
    console.error(`Missing image element. Reading: ${imageElement}`);
    return;
  }
  imageElement.style.backgroundImage = `url(${file})`;
};