import headerText from "./components/headerText";
import headerClock from "./components/headerClock";
import headerContainer from "./components/headerContainer";

export default (function pageHeader() 
{
  return headerContainer
  (
    headerText(),
    headerClock(),
  )
})()