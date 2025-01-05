export default function generateID(idLength)
{
  return Array.from({ length: idLength }, () => Math.floor(Math.random() * 10)).join('');
}