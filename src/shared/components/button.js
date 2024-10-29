import ElementData from "../utils/ElementData";

export function button(buttonText) 
{
  return new ElementData
  (
    'button',
    '',
    {},
    [ buttonText ]
  ).renderElement()
};

export function containedButton(buttonText) 
{
    return new ElementData(
      'div',
      '',
      {},
      [ button(buttonText) ]
    ).renderElement()
};