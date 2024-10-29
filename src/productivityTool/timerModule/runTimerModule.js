import timerBody from "./components/timerBody";
import timerDisplayContainer from "./components/timerDisplayContainer";
import timerButtonsContainer from "./components/timerButtonsContainer";
import watchDisplay from "./components/watchDisplay";
import timeDisplay from "./components/timeDisplay";
import timerControls from "./components/timerControls";
import playButton from "./components/playButton";
import repeatButton from "./components/repeatButton";
import displayInformation from "./components/displayInformation";
import stopButton from './components/stopButton';
import selectTimerButton from "./components/selectTimeButton";
import timerButtonValues from "./utils/timerButtonValues";

export default function runTimerModule()
{
  const nodes = [];

  timerButtonValues.forEach
  (
    node => nodes.push(selectTimerButton(node))
  );

  const element = timerBody
  (
    timerDisplayContainer
    (
      watchDisplay(),
      displayInformation
      (
        timeDisplay(),
        timerControls
        (
          playButton(),
          stopButton(),
          repeatButton()
        ),
      )
    ),
    timerButtonsContainer
    (...nodes)
  )

  return element;
}