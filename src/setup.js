import storageModule from "./storageModule";
import createUser from "./utils/UserFactory";

export default function setup()
{
  const users = storageModule.getUsers();

  if (!users || Object.keys(users).length === 0)
  {
    return false;
  };

  const currentSessionToken = storageModule.getSessionToken();

  if (currentSessionToken)
  {
    for (const key in users)
    {
      if (key === currentSessionToken) return users[key];
    };
  };

  return users;
}
