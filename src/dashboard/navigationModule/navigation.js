import navigationPage from "./components/navigationPage";
import navigationMenu from "./components/navigationMenu";

export default (function navigation() 
{
  return navigationPage
  (
    navigationMenu()
  );
})()
