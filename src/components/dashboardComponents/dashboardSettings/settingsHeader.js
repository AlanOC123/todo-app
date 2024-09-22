import createElement from "../../../utils/classes/createElement";
import ElementData from "../../../utils/classes/ElementData";

export default function settingsHeader() {

  const containerData = new ElementData(
    'h1',
    'settings-header',
    {},
    [ 'Settings' ]
  ).createElementData()

  return createElement(containerData);
}