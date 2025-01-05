import ElementData from "../shared/utils/ElementData";

export default (function selectUser()
{
  return new ElementData
  (
    'div',
    'select-user',
    {},
    []
  ).renderElement();
})
