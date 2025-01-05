const intervalFactory = 
(
  () => 
  {
    return () =>
    {
      let interval = null;
      let recentIntervalFn = null;
      let recentIntervalLen = null;

      const _clearExistingInterval = () =>
      {
        if (!interval) return;
        clearInterval(interval);
        interval = null;
      };

      return {
        startInterval: (intervalLenInSec, intervalFn) =>
        {
          if (intervalLenInSec <= 1 || typeof intervalLenInSec !== 'number')
          {
            console.error('Interval must be a number greater than 1', intervalLenInSec);
            return;
          }

          if (typeof intervalFn !== 'function')
          {
            console.error('Interval must have a valid function', intervalFn);
            return;
          }

          recentIntervalLen = intervalLenInSec * 1000;
          recentIntervalFn = intervalFn;

          if (interval) _clearExistingInterval();
          interval = setInterval(recentIntervalFn, recentIntervalLen);
        },
        stopInterval: () => _clearExistingInterval(),
        resetInterval: () =>
        {
          if (!recentIntervalFn || !recentIntervalLen)
          {
            console.error('No data to reset from', recentIntervalFn, recentIntervalLen);
            return;
          };

          _clearExistingInterval();
          interval = setInterval(recentIntervalFn, recentIntervalLen);
        },
        isRunning: () => !!interval,
      }
    }
  }
)();

export default intervalFactory;