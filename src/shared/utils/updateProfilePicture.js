import storageModule from "./storageModule";
import placeholderImage from '../assets/placeholder-image.jpeg'

export default function updateProfilePicture(previewElement)
{
    const src = storageModule.getSettings('picture') || placeholderImage;
    previewElement.style.backgroundImage = `url(${src})`;
}