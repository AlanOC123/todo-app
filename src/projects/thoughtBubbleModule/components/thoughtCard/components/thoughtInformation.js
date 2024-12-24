import ElementData from "../../../../../shared/utils/ElementData";
import userName from "./userName";
import thoughtContent from "./thoughtContent";
import timeStamp from "./timeStamp";

export default function thoughtInformation(thoughtClass)
{
  return new ElementData
  (
    'div',
    'thought-information',
    {},
    [
      new ElementData
      (
        'div',
        'name-timestamp-wrapper',
        {},
        [
          userName(thoughtClass),
          timeStamp(thoughtClass),
        ]
      ).renderElement(),
      thoughtContent(thoughtClass),
    ]
  ).renderElement();
}