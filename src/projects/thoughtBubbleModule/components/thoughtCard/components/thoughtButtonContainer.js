import importantButton from "./importantButton";
import deleteThoughtButton from "./deleteThoughtButton";
import ElementData from "../../../../../shared/utils/ElementData";

export default function thoughtButtonContainer(thoughtClass)
{
  const isSystemCreated = thoughtClass.getIsThoughtSystemGenerated();
  return new ElementData
  (
    'div',
    'thought-card-buttons',
    {},
    [ 
      (isSystemCreated ? null : importantButton(thoughtClass)),
      deleteThoughtButton(thoughtClass)
    ]
  ).renderElement();
}