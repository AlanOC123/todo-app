import ElementData from "../../utils/ElementData";

export default function profilePicture(id) {
  const element = new ElementData(
    "div",
    "profile-picture",
    {
      id: id,
    },
    []
  ).renderElement();
  return element;
}
