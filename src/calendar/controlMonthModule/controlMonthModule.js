import controlMonthBackground from "./components/controlMonthBackground";
import currentMonthControl from "./components/currentMonthControl";
import selectMonthSection from "./components/selectMonthSection";
import monthsMap from "./utils/monthsMap";
import selectMonthButton from "./components/selectMonthButton";
import selectedMonthDisplay from './components/selectedMonthDisplay';
import expandButton from "./components/expandButton";

export default (function controlMonthModule()
{
  const buttons = [...monthsMap.values()].map(month => selectMonthButton(month));
  return controlMonthBackground
  (
    currentMonthControl
    (
      selectedMonthDisplay(),
      expandButton(),
    ),
    selectMonthSection(...buttons)
  )
})()