import errorHandler from "../../utils/errorHandler";
import getFirstChildElement from "./getFirstChildElement";

export default function removeFirstChild(parentElement)
{
  const firstChild = getFirstChildElement(parentElement);

  if (!firstChild)
  {
    return new errorHandler({ message: 'First Child element not found', variables: { firstChild } });
  };

  parentElement.removeChild(firstChild);
  return true;
}
