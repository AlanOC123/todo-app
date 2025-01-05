import { addDays, isAfter, subDays } from "date-fns";
import UserFactory from "./utils/UserFactory";
import { appEvents, appEventsManager } from "./events/appEvents";
import errorHandler from "./utils/errorHandler";
import duplicateInObject from "./shared/utils/duplicateInObject";

export default (function storageModule() {
  const TOKEN_NAME = 'sessionToken';
  const CACHE_STATE = 'cache';

  const storageCache =
  {
    serialisedUsers: {},
    userProfiles: {},
    activeUser: null,
    sessionTokenID: null,
  };

  const _isLocalStorageAvailable = () =>
  {
    try {
      const value = 'test';
      localStorage.setItem('test-value', value);
      localStorage.removeItem('test-value');
      return true;
    } catch (error) {
      return errorHandler({ message: error, variables: { value, storage: localStorage }, returnValue: false });
    }
  }

  const _storageSafeOperation = (callbackFn) =>
  {
    if (!_isLocalStorageAvailable())
    {
      console.error('Local Storage Not Available');
      return null;
    }

    try
    {
      return callbackFn()
    } catch (e)
    {
      console.error('Storage operation failed', e);
      return null;
    }
  };

  const _setItemToStorage = (storageKey, storageVal) =>
  {
    if (!storageKey || !storageVal)
    {
      return errorHandler({ message: 'Items missing, failed to set storage', variables: { storageKey, storageVal } })
    };

    const stringifiedData = JSON.stringify(storageVal);

    return _storageSafeOperation(() => localStorage.setItem(storageKey, stringifiedData));
  };

  const _getItemFromStorage = (storageKey) =>
  {
    if (!storageKey)
    {
      return errorHandler({ message: 'Items missing, failed to get storage', variables: { storageKey, storageVal } })
    };

    const returnedItem = _storageSafeOperation(() => JSON.parse(localStorage.getItem(storageKey)));

    if (returnedItem === '[object Object]' || !returnedItem)
    {
      return errorHandler({ message: 'Potential corrupted data', variables: { returnedItem } })
    };

    return returnedItem;
  };

  const _setItemToCache = (storageKey, storageVal) =>
  {
    if (!storageKey || !storageVal)
    {
      return errorHandler({ message: 'Items missing, failed to set cache', variables: { storageKey, storageVal } })
    };

    if (!storageCache[storageKey])
    {
      return errorHandler({ message: 'Invalid key. Missing data', variables: { storageKey, storageVal } });
    };

    storageCache[storageKey] = storageVal;
  };

  const _getItemFromCache = (storageKey) =>
  {
    if (!storageKey)
    {
      return errorHandler({ message: 'Items missing, failed to get storage', variables: { storageKey, storageVal } })
    };

    const returnedItem = storageCache[storageKey];

    if (!returnedItem)
    {
      return errorHandler({ message: 'Potential corrupted data', variables: { returnedItem } })
    };

    return returnedItem;
  }

  const _constructUsers = () =>
  {
    const objectToReturn = {};
    const { serialisedUsers } = storageCache;
    for (const userID in serialisedUsers)
    {
      objectToReturn[userID] = UserFactory(serialisedUsers[userID])
    };

    return objectToReturn;
  }

  const _getSessionToken = () =>
  {
    const sessionCookies = document.cookie.split('; ');
    if (!sessionCookies.length === 0 || sessionCookies[0] === '') return { tokenID: null, tokenExpiry: null };
    const tokenID = sessionCookies.find(cookie => cookie.startsWith(`${TOKEN_NAME}=`)).split('=')[1];
    return { tokenID: decodeURIComponent(tokenID) };
  };

  const _removeSessionToken = () =>
  {
    const currentCookies = document.cookie;
    if (!currentCookies)
    {
      return errorHandler({ message: 'No cookies found', variables: { currentCookies }, returnValue: null, level: 'warn' })
    };

    document.cookie = `${TOKEN_NAME}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; SameSite=strict`;
    console.log(document.cookie);
  }

  const _findUser = (userID) =>
  {
    const allUsers = _getItemFromCache('serialisedUsers');
    if (Object.entries(allUsers).length === 0)
    {
      return errorHandler({ message: 'No users created', variables: { userID, allUsers }, returnValue: { serialisedUser: null, userProfile: null }});
    };

    const serialisedUser = storageCache.serialisedUsers[userID] || null;
    const userProfile = storageCache.userProfiles[userID] || null;

    return { serialisedUser, userProfile };
  }

  const _getPreviousActiveUser = () =>
  {
    const { sessionTokenID } = storageCache;

    return _findUser(sessionTokenID).userProfile;
  }

  const _getCacheDataFromStorage = () =>
  {
    const cacheData = _getItemFromStorage(CACHE_STATE) || storageCache;
    storageCache.serialisedUsers = { ...cacheData.serialisedUsers };
    storageCache.userProfiles = _constructUsers();
    const { tokenID = null } = _getSessionToken();
    storageCache.sessionTokenID = tokenID;
    storageCache.activeUser = _getPreviousActiveUser();
    appEventsManager.emit(appEvents.storageLoaded);
  };

  const _setCacheDataToStorage = () =>
  {
    _setItemToStorage(CACHE_STATE, storageCache);
    _getCacheDataFromStorage();
    return true;
  };

  const _addUserToCache = (serialisedUser) =>
  {
    if (!serialisedUser || Object.hasOwn(serialisedUser, 'toObject'))
    {
      return errorHandler({ message: 'User must be a JSON compatible object', variables: { serialisedUser } });
    };

    const { id, isInit, isActivated } = serialisedUser;

    if (!id)
    {
      return errorHandler({ message: 'User ID not set', variables: { serialisedUser } });
    };

    if (duplicateInObject(id, storageCache.serialisedUsers))
    {
      return errorHandler({ message: 'Duplicated found in storage already.', variables: { duplicate: storageCache.serialisedUsers[id] } });
    }

    storageCache.serialisedUsers[id] = serialisedUser;

    if (!isInit, !isActivated) return false;

    _setCacheDataToStorage();
    return true;
  };

  const _updateUser = ({ dataPayload }) =>
  {
    if (!dataPayload)
    {
      return errorHandler({ message: 'Failed to update user. User not provided', variables: { userID, dataPayload } });
    };

    const { id } = dataPayload;

    const { serialisedUser, userProfile } = _findUser(id);

    if (!serialisedUser && !userProfile)
    {
      return errorHandler({ message: 'Failed to update user. User not found', variables: { serialisedUser, userProfile } });
    };

    storageCache.serialisedUsers[id] = dataPayload;

    if (!serialisedUser.isActivated) return false;

    _setCacheDataToStorage();
    return true;
  };

  const _preserveSettings = () =>
  {
    const userActive = _getItemFromCache('activeUser');
    if (!userActive) return false;
    const dataToPreserve = userActive.toObject();
    const userID = activeUser.getID();

    if (!dataToPreserve || !userID) return false;

    storageCache.serialisedUsers[userID] = dataToPreserve;
    _setItemToStorage(CACHE_STATE, storageCache);
  }

  const _deleteProfile = (userID) =>
  {
    const { serialisedUser } = _findUser(userID);

    if (!serialisedUser)
    {
      return errorHandler({ message: 'No User found to delete', variables: { serialisedUser } });
    };

    storageCache.serialisedUsers[userID] = undefined;
    if (storageCache.activeUser)
    {
      if (activeUser.getID() === userID)
      {
        storageCache.activeUser = null;
        // Run Log out logic
      };
    };

    _setCacheDataToStorage();
  }

  _getCacheDataFromStorage();

  appEventsManager.on(appEvents.userCreated, _addUserToCache);
  appEventsManager.on(appEvents.userDeleted, _deleteProfile);
  appEventsManager.on(appEvents.saveSettings, _updateUser);
  appEventsManager.on(appEvents.preserveSettings, _preserveSettings);
  appEventsManager.on(appEvents.sessionStarted, _getCacheDataFromStorage);
  return {
    getUserProfiles: () => _getItemFromCache('userProfiles'),
    getActiveUser: () => _getItemFromCache('activeUser'),
    getSessionTokenID: () => _getItemFromCache('sessionTokenID'),
    getSessionTokenExpiry: () => _getItemFromCache('sessionTokenExpiry'),
    setSessionToken: (userID) =>
    {
      if (!userID)
      {
        return errorHandler({ message: 'No User ID provided', variables: { userID } });
      };

      const newTokenID = encodeURIComponent(userID);
      let newTokenExpiry;

      const { tokenID } = _getSessionToken();

      if (tokenID)
      {
        document.cookie = `${TOKEN_NAME}=${newTokenID}`;
      };

      document.cookie = `${TOKEN_NAME}=${newTokenID}; expires=${addDays(new Date(), 3).toUTCString()}; SameSite=strict;`;
      storageCache.sessionTokenID = newTokenID;
      storageCache.sessionTokenExpiry = newTokenExpiry;
      _setCacheDataToStorage();
      return true;
    },
    clearAll: () =>
    {
      localStorage.clear();
      _removeSessionToken();
    }
  };
})();
