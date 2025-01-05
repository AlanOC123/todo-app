import iconsMap from "../utils/iconsMap";
import iconContainer from "./icon";
import ElementData from "../../utils/ElementData";

const filterButton = () => iconContainer(iconsMap.filter.icon, null);
const sortButton = () => iconContainer(iconsMap.sort.icon, null);
const createButton = () => iconContainer(iconsMap.create.icon, null);
const deleteButton = () => iconContainer(iconsMap.delete.icon, null);
const editButton = () => iconContainer(iconsMap.edit.icon, null);
const calendarButton = () => iconContainer(iconsMap.calendarSelect.icon, null);

const buttonMap =
{
  filter: filterButton,
  sort: sortButton,
  create: createButton,
  delete: deleteButton,
  edit: editButton,
  calendar: calendarButton,
};

const serveButton = (() => { return (button) => new ElementData('div', 'action-button', {}, [buttonMap[button]()]).renderElement(); })();

export default serveButton;
