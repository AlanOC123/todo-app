import listField from "../../../shared/components/list";
import navigationMenuRenderData from "../utils/navigationRenderData";
import navMenuCard from "./navMenuCard";
import navMenuPicture from "./navMenuPicture";

export default function navigationMenu()
{
  const listItems = navigationMenuRenderData.map(item => navMenuCard(item.id, item.icon, item.event));

  listItems.push(navMenuPicture());

  const listItemsObject = 
  {
    listElements: listItems,
    className: '',
  }

  return listField
  (
    'nav-menu',
    'nav-menu',
    listItemsObject
  );
}