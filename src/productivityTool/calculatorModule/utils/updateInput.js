import productivityState from "../../shared/utils/productivityToolState";

export default function updateInput()
{
  const { inputValue } = productivityState.calculator;

  if (inputValue !== '')
  {
    return inputValue;
  }
  
  return '0';
};