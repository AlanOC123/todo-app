import ElementData from "../../utils/ElementData";

export default function formHeader(headerText) {
  const element = new ElementData("p", 'form-header', {}, [
    headerText,
  ]).renderElement();

  return element;
}
