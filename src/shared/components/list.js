import ElementData from "../utils/ElementData";

export default function listField(className, id, listItemsObject) 
{
  const element = new ElementData
  (
    'ul',
    className,
    {
      id: id
    },
    []
  ).renderElement();

  if (listItemsObject instanceof Object && listItemsObject) {
    populateList(element, listItemsObject.listElements, listItemsObject.className)
  };

  return element;
}

export function listItem(className, ...children) {
  return new ElementData
  (
    'li',
    className,
    {},
    [ ...children ]
  ).renderElement()
}

export function populateList(parent, list, className) 
{
  list.forEach(
    el => {
    parent.appendChild(listItem(className, el));
    }
  )
}