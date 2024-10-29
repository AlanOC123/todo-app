import setName from '../utils/setName'

export default function formatName({firstName, lastName}) 
{
  const name = `${firstName} ${lastName}`.trim();
  setName(name);
}