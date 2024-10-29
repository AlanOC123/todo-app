import pictureInput from "../../../shared/components/pictureInput";
import getImageFromInput from '../utils/getImageFromInput';

export default function uploadPictureInput()
{
  const element = pictureInput('upload-input', 'upload-input');

  element.addEventListener('change', getImageFromInput);

  return element;
}