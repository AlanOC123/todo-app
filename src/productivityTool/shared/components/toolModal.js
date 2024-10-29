import ElementData from "../../../shared/utils/ElementData";
import toggleModal from "../utils/toggleModal";

export default function toolModal(...components)
{
  const element = new ElementData
  (
    'section',
    'productivity-tool-modal',
    {
      id: 'productivity-tool-modal',
    },
    [ ...components ]
  ).renderElement();

  element.addEventListener('click', toggleModal);

  return element;
}