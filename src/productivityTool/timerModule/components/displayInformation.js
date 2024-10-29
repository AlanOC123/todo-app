import ElementData from "../../../shared/utils/ElementData";

export default function displayInformation(...nodes)
{
  return new ElementData
  (
    'div',
    'display-information',
    {},
    [...nodes]
  ).renderElement();
};