import errorHandler from "../../utils/errorHandler";

export default function findItemInObject(key, object)
{
  if (!key || !object || typeof object !== 'object' || Array.isArray(object))
  {
    return errorHandler({ message: 'Invalid arguments provided', variables: { key, object }});
  };

  if (!object[key])
  {
    return errorHandler({ message: 'Item not found', variables: { found: object[key] }});
  };

  return object[key];
}
