export default function checkPlural(strVal, count)
{
  if (count === 1) return `${strVal}`
  else return `${strVal}s`;
}