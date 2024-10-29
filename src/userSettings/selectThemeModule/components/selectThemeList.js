import themes from "../utils/themes";
import themeCard from "./themeCard";
import listField from "../../../shared/components/list";
import storageModule from "../../../shared/utils/storageModule";

export default function selectThemeList()
{
  const currentTheme = storageModule.getSettings('theme');
  const cards = themes.map
  (
    theme => themeCard(theme, currentTheme)
  );
  const listItemsObject = 
  {
    listElements: cards,
    className: ''
  };
  return listField('select-theme-list', 'select-theme-list', listItemsObject);
}