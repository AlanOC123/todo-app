import { appEvents, appEventsManager } from '../events/appEvents';
import placeholderImage from '../shared/assets/system_user_image.jpg';
import storageModule from '../storageModule';
import generateID from '../shared/utils/generateID';
import errorHandler from './errorHandler';
import CategoryFactory from './CategoryFactory';
import ComplexTaskFactory from './ComplexTaskFactory';
import SimpleTaskFactory from './SimpleTaskFactory';
import { format } from 'date-fns';

const UserFactory =
(
  () =>
  {
    const MIN_NAME_LENGTH = 2;
    const MAX_NAME_LENGTH = 30;

    const _isValid = (name, id, image) =>
    {
      return name !== 'Type Name'
      && typeof name === 'string'
      && id !== null
      && image !== placeholderImage
      && image !== null;
    }

    const _validateKey = (key) => ['tasks', 'projects', 'stats'].includes(key);

    const _isBase64Image = (str) => /^data:image\/[a-z]+;base64,/.test(str);

    return (userData = {}) =>
    {
      let name = userData.name || 'Type Name';
      let id = userData.id || generateID(32);
      let tasks = userData.tasks || { tasks: {}, categories: {} };
      let projects = userData.projects || { projects: {}, components: {}, tasks: {} };
      let stats = userData.stats || {};
      let image = userData.image || placeholderImage;
      let createdAt = userData.createdAt ? new Date(userData.createdAt) : new Date();
      let updatedAt = userData.updatedAt ? new Date(userData.updatedAt) : null;
      let isInit = userData.isInit || false;
      let isActivated = userData.isActivated || false;
      let preferences = userData.preferences ||
      {
        colorTheme: 'Default',
        filterTasks: { heading: 'All', option: null,  },
        sortTasks: { heading: 'All', option: null,  },
        chosenDate: { day: format(new Date(), 'EEEE'), date: new Date() },
        lastPageVisited: 'home',
      };
      let version = userData.version || 1;
      let notifications = userData.notification || { unread: 0, messages: [], thoughts: [] };

      const listItemMap =
      {
        tasks: tasks,
        projects: projects,
        stats: stats,
      };

      const propertiesMap =
      {
        'category': tasks.categories,
        'complex task': tasks.tasks,
        'project': projects.projects,
        'component': projects.components,
        'simple task': projects.tasks,
      };

      const _baseData = () =>
      (
        {
          name,
          id,
          tasks: { tasks: {...tasks.tasks}, categories: {...tasks.categories} },
          projects: { projects: { ...projects.projects }, components: { ...projects.components }, tasks: { ...projects.tasks } },
          stats,
          image,
          createdAt: createdAt ? createdAt.toISOString() : null,
          updatedAt: updatedAt ? updatedAt.toISOString() : null,
          isInit,
          isActivated,
          preferences: { ...preferences },
          version,
          notifications: { ...notifications },
        }
      );

      const _sendUserData = () =>
      {
        if (!isActivated) return false;
        const userPayload = _baseData();
        appEventsManager.emit(appEvents.saveSettings, { dataPayload: userPayload });
        return true;
      };

      const _updateUser = ({ dataPayload }) =>
      {
        if (!dataPayload)
        {
          return errorHandler({ message: 'Not data provided', variables: { dataPayload }, returnValue: false });
        }
        if (!dataPayload.owner === id) return false;
        const dataID = dataPayload.id;
        const dataType = dataPayload.type;

        if (!dataID || !dataType || dataType === 'generic')
        {
          return errorHandler({ message: 'Invalid Data Type or ID provided', variables: { dataID, dataType } });
        };

        if (!propertiesMap[dataType])
        {
          return errorHandler({ message: 'Property Object not found', variables: { dataID, dataType,         propertyObject: propertiesMap[dataType] } });
        };

        propertiesMap[dataType][dataID] = dataPayload;
        _sendUserData();
      }

      appEventsManager.on(appEvents.userUpdated, _updateUser);

      return {
        setName: (newName) =>
        {
          if (!newName) return false;

          if (newName.length > MAX_NAME_LENGTH || newName.length < MIN_NAME_LENGTH)
          {
            console.error('Image should between 2 and 30 characters');
            return false;
          };
          name = newName;
          updatedAt = new Date();
          isInit = _isValid(name, id, image);
          if (_sendUserData()) return true;
          return false;
        },
        setImage: (base64) =>
        {
          if (!base64)
          {
            console.error('Image not provided');
            return false;
          };

          if (typeof base64 !== 'string')
          {
            console.error('Invalid image type');
            return false;
          };

          if (!_isBase64Image(base64))
          {
            console.error('Image file provided');
            return false;
          }

          image = base64;
          updatedAt = new Date();
          isInit = _isValid(name, id, image);
          if (_sendUserData()) return true;
          return false;
        },
        setTheme: (themeKey) =>
        {
          if (!themeKey)
          {
            console.warn('No Key provided', themeKey);
            return false;
          };

          preferences.colorTheme = themeKey;
          if (_sendUserData()) return true;
          return false;
        },
        setLastPageVisited: (pageID) =>
        {
          if (!pageID)
          {
            console.error('Page not provided', pageID);
            return;
          };

          preferences.lastPageVisited = pageID;
          if (_sendUserData()) return true;
          return false;
        },
        activateUser: () => isActivated = true,
        addItem: (key, value, itemToAdd) =>
        {
          if (!_validateKey(key)){
            console.error('Invalid Key Name');
            return false;
          }

          if (!value)
          {
            console.error('List Name Not Provided');
            return false;
          };

          if (!itemToAdd)
          {
            console.error('Item Not Provided');
            return false;
          };

          if (!listItemMap || !listItemMap[key] || Array.isArray(listItemMap[key]))
          {
            return errorHandler({ message: 'Failed to find place to put item.', variables: { listItemMap, key, value, valueFound: listItemMap[key],  } })
          };

          listItemMap[key][value][itemToAdd.id] = itemToAdd;
          updatedAt = new Date();
          if (_sendUserData()) return true;
          return false;
        },
        deleteItem: (key, value, id) =>
        {
          if (!_validateKey(key)){
            console.error('Invalid Key Name');
            return false;
          }

          if (!value)
          {
            console.error('List Name Not Provided');
            return false;
          };

          if (!id)
          {
            console.error('Item Not Provided');
            return false;
          }

          if (!listItemMap || !listItemMap[key] || Array.isArray(listItemMap[key]))
            {
              return errorHandler({ message: 'Failed to find item to delete.', variables: { listItemMap, key, value, valueFound: listItemMap[key],  } })
            };

          const listItem = listItemMap[key][value];

          listItem[id] = undefined;
          updatedAt = new Date();
          if (_sendUserData()) return true;
          return false;
        },
        getName: () => name,
        getID: () => id,
        getTasks: () => { return { ...tasks } },
        getProjects: () => { return { ...projects } },
        getStats: () => { return { ...stats } },
        getImage: () => image,
        getTheme: () => preferences.colorTheme,
        getTasks: () => tasks.tasks,
        getCategories: () => tasks.categories,
        getProjects: () => projects.projects,
        getComponents: () => projects.components,
        getProjectTasks: () => projects.tasks,
        getCreatedAt: () => createdAt,
        getUpdatedAt: () => updatedAt,
        getIsInit: () => isInit,
        getIsActivated: () => isActivated,
        toObject: () => ({ ..._baseData() }),
      }
    }
  }
)();

export default UserFactory;
