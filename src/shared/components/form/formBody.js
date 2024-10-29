import ElementData from "../../utils/ElementData";

export default function formBody(...components) {
  return new ElementData("div", 'form-body', {}, [...components]).renderElement();
}
