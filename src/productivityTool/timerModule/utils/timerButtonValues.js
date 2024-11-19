const timerButtonValues = new Map
(
  [
    [
      1, 
      { 
        textValue: '1 Minute', 
        totalTime: 60, 
        timeOn: Math.floor(60 * 0.8),
        timeOff: Math.floor(60 * 0.2)
      },
    ],
    [
      2, 
      { 
        textValue: '5 Minutes', 
        totalTime: 300, 
        timeOn: Math.floor(3600 * 0.8),
        timeOff: Math.floor(3600 * 0.2)
      },
    ],
    [
      3, 
      { 
        textValue: '10 Minutes', 
        totalTime: 600, 
        timeOn: Math.floor(600 * 0.8),
        timeOff: Math.floor(600 * 0.2)
      },
    ],
    [
      4, 
      { 
        textValue: '15 Minutes', 
        totalTime: 900, 
        timeOn: Math.floor(900 * 0.8),
        timeOff: Math.floor(900 * 0.2)
      },
    ],
    [
      5, 
      { 
        textValue: '30 Minutes', 
        totalTime: 1800, 
        timeOn: Math.floor(1800 * 0.8),
        timeOff: Math.floor(1800 * 0.2)
      },
    ],
    [
      6,   
      { 
        textValue: '45 Minutes', 
        totalTime: 2700, 
        timeOn: Math.floor(2700 * 0.8),
        timeOff: Math.floor(2700 * 0.2)
      },
    ],
    [
      7, 
      { 
        textValue: '1 Hour', 
        totalTime: 3600, 
        timeOn: Math.floor(3600 * 0.8),
        timeOff: Math.floor(3600 * 0.2)
      }
    ],
    [
      8, 
      { 
        textValue: '2 Hours', 
        totalTime: 7200, 
        timeOn: Math.floor(7200 * 0.8),
        timeOff: Math.floor(7200 * 0.2)
      }
    ],
  ]
)

export default timerButtonValues;