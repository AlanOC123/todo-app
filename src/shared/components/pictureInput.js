import ElementData from "../utils/ElementData";

export default function pictureInput(id, name, accept = 'image/jpeg,jpg,png')
{
  return new ElementData
  (
    'input',
    'picture-input',
    {
      type: 'file',
      accept: accept,
      id: id,
      name: name
    },
    []
  ).renderElement();
} 