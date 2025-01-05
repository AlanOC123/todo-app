import ElementData from "../../utils/ElementData";
import errorHandler from "../../utils/errorHandler";

export default function singleSelectInput(className, optionsArray, defaultValue)
{
  if (!optionsArray || !Array.isArray(optionsArray) || !className || !defaultValue)
  {
    return errorHandler({ message: 'Invalid arguments passed to Single Select Input', variables: { optionsArray, className, defaultValue } });
  }
  const optionElement = (text) => new ElementData('option', 'select-opt', { value: text }, [ text]).renderElement();

  const element = new ElementData('select', className, {}, []).renderElement();

  optionsArray.forEach(option => element.append(optionElement(option)));

  element.value = defaultValue;

  return element;
}
