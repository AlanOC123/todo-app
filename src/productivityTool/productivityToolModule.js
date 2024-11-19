import toolModal from "./shared/components/toolModal";
import toolContainer from "./shared/components/toolContainer";
import toolButton from "./shared/components/toolButton";
import calculatorButton from "./shared/components/calculatorButton";
import timerButton from "./shared/components/timerButton";
import toolBody from "./shared/components/toolBody";
import runCalculatorModule from "./calculatorModule/runCalculatorModule";
import runTimerModule from "./timerModule/runTimerModule";
import toolButtonText from "./shared/components/toolButtonText";
import toolControls from "./shared/components/toolControls";
import timerController from "./timerModule/utils/timerController";

export default (function productivityToolModule()
{
  const dashboard = document.querySelector('#dashboard');
  dashboard.appendChild
  (
    toolModal
    (
      toolBody
      (
        toolContainer
        (
          runCalculatorModule(),
          runTimerModule(),
        ),
        toolButton
        (
          toolButtonText(),
          toolControls
          (
            calculatorButton(),
            timerButton(),
          )
        )
      )
    )
  )
})()