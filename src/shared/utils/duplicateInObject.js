export default function duplicateInObject(key, object)
{
  if (key in object)
  {
    return true;
  }

  return false;
}
