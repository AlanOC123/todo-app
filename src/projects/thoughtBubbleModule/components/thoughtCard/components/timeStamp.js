import ElementData from "../../../../../shared/utils/ElementData";

export default function timeStamp(thoughtClass)
{
  if (!thoughtClass)
  {
    return;
  };

  return new ElementData
  (
    'p',
    'thought-card-time-stamp',
    {},
    [thoughtClass.getThoughtHour()]
  ).renderElement();
}