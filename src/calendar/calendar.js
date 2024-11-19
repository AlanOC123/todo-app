import calendarPage from "./shared/components/calendarPage"
import pageHeader from "./pageHeader/pageHeader"
import controlMonthModule from "./controlMonthModule/controlMonthModule";
import calendarDisplayModule from "./calendarDisplayModule/calendarDisplayModule";

export default (function calendar()
{
  return calendarPage
  (
    pageHeader,
    controlMonthModule,
    calendarDisplayModule
  )
})()