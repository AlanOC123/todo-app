import ElementData from "../utils/ElementData";

export default function page(id, ...children) 
{
  return new ElementData
    (
      'div',
      'page',
      {
        id: id,
      },
      [...children]
    ).renderElement();
}