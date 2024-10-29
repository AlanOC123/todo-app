import ElementData from "../../../shared/utils/ElementData";

export default function taskDisplayList(id, ...cards)
{
  return new ElementData
  (
    'ul',
    'task-display-section-container',
    {
      id: id,
    },
    [
      (
        new ElementData
        (
          'div',
          '',
          {},
          [...cards],
        ).renderElement()
      )
    ]
  ).renderElement()
}