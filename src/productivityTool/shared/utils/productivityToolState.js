const productivityState = 
{
  calculator:
  {
    inputValue: '0',
    displayValue: '',
    displayHistory: [],
    lastOperation: '',
    lastValue: '0',
  },
  timer:
  {
    isActive: false,
    isResting: false,
    isRepeated: false,
    isPaused: false,
    isComplete: false,
    currentTimeSet: 0,
    currentTotalTime: 0,
    currentTimeOn: 0,
    currentTimeOff: 0,
    currentTimeIndex: '',
    moduleButtonData: null,
  }
}

export default productivityState;