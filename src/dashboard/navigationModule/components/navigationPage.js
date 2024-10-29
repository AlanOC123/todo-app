import ElementData from "../../../shared/utils/ElementData";

export default function navigationPage(...children)
{
  return new ElementData
  (
    'nav',
    '',
    {
      id: 'navigation',
    },
    [...children]
  ).renderElement();
}
