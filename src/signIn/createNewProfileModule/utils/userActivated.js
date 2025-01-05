import errorHandler from "../../../utils/errorHandler";
import checkInit from "./checkInit";

export default function userActivated(userData)
{
  if (!userData)
  {
    return new errorHandler({ message: 'User data not provided', variables: { userData }, returnValue: false })
  };

  if (!checkInit(userData)) return false;

  userData.isInit = userData.isActivated = true;

  return true;
}
