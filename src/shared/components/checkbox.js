import createElement from "../../utils/classes/createElement";
import ElementData from "../../utils/classes/ElementData";

export default function checkbox(id, name)
{
  return createElement
  (
    new ElementData
    (
      'label',
      'checkbox',
      {
        htmlFor: id,
      },
      [
        input(id, name),
        checkMark(),
      ]
    ).createElementData()
  )
}

function checkMark()
{
  return createElement
  (
    new ElementData
    (
      'span',
      'custom-checkmark',
      {},
      []
    ).createElementData()
  )
};

function input(id, name) 
{
  return createElement
  (
    new ElementData
    (
      'input',
      '',
      {
        type: 'checkbox',
        id: id,
        name: name,
      },
      []
    ).createElementData()
  )
}