import ElementData from "../utils/ElementData";

function iconElement(iconClass) {
  return new ElementData("i", iconClass, {}, []).renderElement();
}

function iconLabel(iconLabel) {
  if (iconLabel) {
    return new ElementData("p", "", {}, [iconLabel]).renderElement();
  } else {
    return;
  };
};

export default function iconContainer(iconClass, iconText) {
  return new ElementData("div", "icon", {}, [
      iconElement(iconClass),
      iconLabel(iconText)
    ]).renderElement()
}
