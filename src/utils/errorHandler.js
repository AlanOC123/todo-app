const errorHandler =({
  message,
  variables,
  returnValue = null,
  level = 'error',
  callback = null,
}) => {
  const logType = console[level] || console.error;

  logType(`[${level.toUpperCase()}], ${ message }`, { variables });

  if (typeof callback === 'function')
  {
    callback(message, variables);
  }
  return returnValue;
}

export default errorHandler;
