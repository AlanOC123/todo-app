import ElementData from "../../../../../shared/utils/ElementData";

export default function seperator()
{
  return new ElementData
  (
    'p',
    'seperator',
    {},
    ['\u2022']
  ).renderElement();
}