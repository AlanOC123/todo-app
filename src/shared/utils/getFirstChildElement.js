import errorHandler from "../../utils/errorHandler";

export default function getFirstChildElement(parentElement)
{
  if (!parentElement)
  {
    return errorHandler({ message: 'Parent element not found', variables: { parentElement } });
  };

  return parentElement.firstChild;
}
