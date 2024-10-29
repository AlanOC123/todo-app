import headerText from "./components/headerText";
import headerDate from "./components/headerDate";
import headerContainer from "./components/headerContainer";

export default (function pageHeader() 
{
  return headerContainer
  (
    headerText(),
    headerDate(),
  )
})()