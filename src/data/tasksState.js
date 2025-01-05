import appState from "./appState";
import { appEvents, appEventsManager } from "../events/appEvents";
import { tasksEvents, tasksEventsManager } from '../events/tasksEvents';
import errorHandler from "../utils/errorHandler";

const tasksState = (
  () =>
  {
    let state =
    {
      preferences: { filterTasks: { option: null, heading: 'All' }, sortTasks: { option: null, heading: 'All' }, },
      tasks: { tasks: {}, categories: {} },
      taskCount: 0,
      categoryCount: 0,
      activeCategory: null,
    };

    const _loadFromAppData = ({ tasks, preferences }) =>
    {
      if (!tasks || !preferences)
      {
        console.error('Failed to get data', tasks, preferences);
        return;
      };

      state.preferences = { ...preferences };
      state.tasks = { ...tasks };

      state.taskCount = tasks?.tasks?.length || 0;
      state.categoryCount = tasks?.categories?.length || 0;

      _setCategory();
      tasksEventsManager.emit(tasksEvents.stateLoaded, _sendDeepCopy);
    };

    const _findActiveCategory = () =>
    {
      return Object.values(state.tasks.categories).find(category => category.getIsActive())
    };

    const _setDefaultCategory = () =>
    {
      const keys = Object.entries(state.tasks.categories);
      return state.tasks.categories[keys[0]];
    };

    const _setCategory = (id) =>
    {
      if (Object.keys(state.tasks.categories).length === 0) return null;
      const { categories } = state.tasks;
      if (id)
      {
        if (!categories[id])
        {
          return errorHandler({ message: 'Invalid category ID', variables: { id, categories } });
        };

        state.activeCategory = categories[id];
        tasksEventsManager.emit(tasksEvents.categorySelected);
        return true;
      };

      _findActiveCategory() || _setDefaultCategory();
      return false;
    };

    const _sendDeepCopy = () =>
    {
      return { ...state };
    }

    const _removeListeners = () =>
    {
      appEventsManager.off(appEvents.stateChanged, _loadFromAppData);
      tasksEventsManager.off(tasksEvents.stateLoaded, _sendDeepCopy);
    };

    appEventsManager.on(appEvents.stateChanged, _loadFromAppData);
    tasksEventsManager.on(tasksEvents.categoryChanged, _setCategory);

    return {
      setPreference: (prefKey, prefGrouping, prefOption) =>
      {
        if (!prefKey || !prefGrouping || !prefOption)
        {
          return errorHandler({ message: 'Invalid preference setting', variables: { filterBy, grouping } })
        };

        const prefSetting = state.preferences[prefKey];
        prefSetting.option = prefOption;
        prefSetting.heading = prefGrouping;
        let emitter = prefKey === 'filterTasks'
        ? tasksEvents.filterChanged
        : prefKey === 'sortTasks'
        ? tasksEvents.sortChanged
        : null;

        if (!emitter) return errorHandler({ message: 'Invalid emitter value from key', variables: { key, emitter } });
        tasksEventsManager.emit(emitter);
      },
      getFilter: () => state.preferences.filterTasks,
      getSort: () => state.preferences.sortTasks,
      getTasks: () =>
      {
        const { activeCategory, preferences } = state;
        const { filterTasks, sortTasks } = preferences;
        const filterKey = filterTasks.heading;
        const filterOption = filterTasks.option;
        const sortKey = sortTasks.heading;
        const sortOption = sortTasks.option;
        const tasks = state.tasks.tasks;

        let groupHeadings = [];

        if (activeCategory && filterKey === 'All' && sortKey === 'All')
        {
          return { heading: ['All', 'Draft'] };
        }
      },
      getCategories: () => state.tasks.categories,
      getTaskCount: () => state.taskCount,
      getCategoryCount: () => state.categoryCount,
      getActiveCategory: () => state.activeCategory,
      setActiveCategory: (selectedCategoryID) =>
      {
        if (!selectedCategoryID)
        {
          console.error('No Category Given', selectedCategoryID);
          return;
        };

        state.tasks.activeCategory = state.tasks.categories[selectedCategoryID];
      },
      getDebugState: () => JSON.parse(JSON.stringify(state, null, 1)),
    }
  }
)()

export default tasksState;
