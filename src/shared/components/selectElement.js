import ElementData from "../../utils/ElementData"
import errorHandler from "../../utils/errorHandler";

export default function selectElement(optionList)
{
  if (!optionList)
  {
    return errorHandler({ message: 'No options given', variables: { optionList }, level:'warn' });
  }
  const optionElement = (value) => new ElementData('option','select-option', { value: value }, [ value ]).renderElement();

  const selectElement = new ElementData('select', 'select-el', {}, []).renderElement();

  optionList.map(option => optionElement(option)).forEach(option => selectElement.append(option));

  return selectElement;
}
