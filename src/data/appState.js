import { appEvents, appEventsManager } from "../events/appEvents";
import storageModule from "../storageModule";
import { differenceInSeconds } from "date-fns";
import errorHandler from "../utils/errorHandler";
import CategoryFactory from "../utils/CategoryFactory";
import SimpleTaskFactory from "../utils/SimpleTaskFactory";
import ComplexTaskFactory from "../utils/ComplexTaskFactory";
import ProjectFactory from '../utils/ProjectFactory';
import ComponentFactory from '../utils/ComponentFactory';

const appState = (() => {
  const defaultState =
  {
    metaData:
    {
      currentDate: new Date(),
      sessionStart: null,
      sessionEnd: null,
      sessionDuration: 0,
      currentVersion: 1,
      currentUser: null,
    }
  };

  let state = { ...defaultState };

  const _routeEntities = (id, dataObject, destination, factoryFn) =>
  {
    if (!id || !dataObject || !destination || !factoryFn)
    {
      return errorHandler({ message: 'Missing required parameters', variables: { id, dataObject, destination, factoryFn } });
    };

    const entity = _constructEntity(dataObject, factoryFn);
    destination[id] = entity;
    return true;
  }

  const _constructEntity = (dataObject, factoryFn) =>
  {
    if (!dataObject) return errorHandler({ message: 'Construction data missing', variables: { dataObject } });

    return factoryFn(dataObject);
  };

  const _transformEntities = () =>
    {
      const { currentUser } = state.metaData;
      const propertiesMap =
      {
        'Categories': { destination: state.tasks.categories, factory: CategoryFactory },
        'Tasks': { destination: state.tasks.tasks, factory: ComplexTaskFactory },
        'Projects': { destination: state.projects, factory: ProjectFactory },
        'Components': { destination: state.projects.components, factory: ComponentFactory },
        'ProjectTasks': { destination: state.projects.tasks, factory: SimpleTaskFactory },
      };

      for (const [key, { destination, factory}] of Object.entries(propertiesMap))
      {
        const dataObjects = currentUser[`get${key}`]();

        for (const [ id, dataObject ] of Object.entries(dataObjects))
        {
          _routeEntities(id, dataObject, destination, factory);
        }
      };
    };

  const _setState = (newState) => {
    state = { ...newState, metaData: state.metaData };
    state.metaData.currentUser = storageModule.getActiveUser();
    _transformEntities();
    console.log(state);
    _notifySubscribers();
  };

  const _notifySubscribers = () => appEventsManager.emit(appEvents.stateChanged, { ...state });

  const _loadStateFromStorage = () => {
    const activeUser = storageModule.getActiveUser();
    if (!activeUser)
    {
      return errorHandler({ message: 'No active user found', variables: { activeUser }, level: 'warn', returnValue: null });
    }

    _setState(activeUser.toObject());
  };

  const _startSession = () => {
    state.metaData.sessionStart = new Date();
    _loadStateFromStorage();
  };

  const _endSession = () =>
  {
    const start = metaData.sessionStart;
    const end = new Date();
    state.metaData.sessionDuration = differenceInSeconds(end, start);
    state.metaData.sessionStart = null;
    state.metaData.sessionEnd = null;
    state = { ...defaultState };
    appEventsManager.emit(appEvents.unloadState);
  }

  appEventsManager.on(appEvents.storageLoaded, _loadStateFromStorage);
  appEventsManager.on(appEvents.sessionEnded, _endSession);

  return {
    getTheme: () => state?.preferences?.colorTheme || null,
    getCurrentPage: () => state.preferences?.lastPageVisited || 'home',
    getCurrentUser: () => state.metaData.currentUser,
    getCurrentVersion: () => state.metaData.currentVersion,
  };
})();

export default appState;
