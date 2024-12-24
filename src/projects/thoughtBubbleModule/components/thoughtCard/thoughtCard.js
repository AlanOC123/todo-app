import ElementData from "../../../../shared/utils/ElementData";
import thoughtInformation from './components/thoughtInformation';
import userImage from "./components/userImage";
import thoughtButtonContainer from "./components/thoughtButtonContainer";

export default function thoughtCard(thoughtClass)
{
  return new ElementData
  (
    'div',
    'thought-card',
    {},
    [
      userImage(thoughtClass),
      thoughtInformation(thoughtClass),
      thoughtButtonContainer(thoughtClass),
    ]
  ).renderElement();
}