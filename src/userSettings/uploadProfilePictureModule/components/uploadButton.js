import label from "../../../shared/components/label";

export default function uploadButton()
{
  const element = label('Upload', 'upload-input');

  element.classList.add('upload-button');

  return element;
}