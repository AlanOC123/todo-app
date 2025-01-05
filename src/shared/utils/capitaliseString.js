const capitaliseString = (strValue) =>
{
  return strValue.split(' ').map
  (
    str => (str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()).trim(),
  ).join(' ');
};

export default capitaliseString;