import ElementData from "../../../shared/utils/ElementData";

export default function uploadPictureContainer(...components)
{
  return new ElementData
  (
    'div',
    'upload-picture-field',
    {},
    [...components]
  ).renderElement();
};