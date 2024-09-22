import createElement from "../../../utils/classes/createElement";
import ElementData from "../../../utils/classes/ElementData";
import pictureInputEvent from "../../../utils/dataProcessing/pictureInputEvent";
import EventsManager from "../../../utils/events/common/EventsManager";
import events from "../../../utils/events/common/events";
import storageModule from "../../../utils/dataProcessing/storageModule";
import placeholderImage from '../../../assets/placeholder-image.jpeg';

export default function settingsPictureEntry() {

  function updatePreview() {
    const src = storageModule.getSettings('picture') || placeholderImage;
    preview.style.backgroundImage = `url(${src})`;
  };

  const previewData = new ElementData(
    'div',
    'picture-preview',
    {},
    []
  ).createElementData();

  const preview = createElement(previewData);
  updatePreview();
  
  EventsManager.on(events.pictureChanged, updatePreview);

  const inputData = new ElementData(
    'input',
    'picture-input',
    {
      type: 'file',
      accept: 'image/jpeg,jpg,png',
      id: 'picture-input',
      name: 'picture-input'
    },
    []
  ).createElementData();

  const input = createElement(inputData);

  input.addEventListener('change', pictureInputEvent);

  const labelData = new ElementData(
    'label',
    'picture-label', 
    {
      for: 'picture-input'
    },
    ['Upload']
  ).createElementData()

  const containerData = new ElementData(
    'div',
    'picture-entry',
    {},
    [
      input,
      preview,
      createElement(labelData)
    ]
  ).createElementData();

  return createElement(containerData);
}