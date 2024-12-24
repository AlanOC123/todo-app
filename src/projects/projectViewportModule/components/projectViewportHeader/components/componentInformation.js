import ElementData from "../../../../../shared/utils/ElementData";
import seperator from "./seperator";
import componentNameDisplay from "./componentNameDisplay";
import componentCreatedDisplay from "./componentStartDateDisplay";
import componentStatusDisplay from "./componentStatusDisplay";
import componentTaskCountDisplay from "./componentTaskCountDisplay";
import componentDurationDisplay from "./componentDurationDisplay";

export default function componentInformation()
{
  return new ElementData
  (
    'div',
    'component-information',
    {},
    [
      componentNameDisplay(),
      seperator(),
      componentCreatedDisplay(),
      seperator(),
      componentStatusDisplay(),
      seperator(),
      componentTaskCountDisplay(),
      seperator(),
      componentDurationDisplay(),
    ]
  ).renderElement()
}