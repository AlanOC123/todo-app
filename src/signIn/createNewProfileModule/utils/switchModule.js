import createNewProfile from "../createNewProfile";
import selectProfile from "../../shared/components/selectProfile";
import errorHandler from "../../../utils/errorHandler";
import removeFirstChild from "../../../shared/utils/removeFirstChild";
import dashboard from "../../../dashboard/dashboard";

export default function switchModule(option, data)
{
  if (!option || !['select', 'create', 'dashboard'].includes(option))
  {
    return errorHandler({ message: 'Invalid option', variables: { option } })
  };

  const mainModule = document.querySelector('.sign-in');
  if (!mainModule)
  {
    return errorHandler({ message: 'Sign In page not found to hook', variables: { mainModule } });
  };

  removeFirstChild(mainModule);

  const pageMap =
  {
    'select': selectProfile,
    'create': createNewProfile,
    'dashboard': dashboard,
  };

  console.log(pageMap[option]);

  mainModule.append(pageMap[option](data));
}
