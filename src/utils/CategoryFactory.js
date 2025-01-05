import EntityFactory from "./EntityFactory";
import { categoryIconMap, genericIcon } from "./categoryIconMap";
import capitaliseString from "../shared/utils/capitaliseString";
import { appEvents, appEventsManager } from "../events/appEvents";
import errorHandler from "./errorHandler";

const CategoryFactory =
(
  () =>
  {
    return ({ owner, name, id, createdAt, updatedAt, type, icon, tasks = [], isActive = false, isEditable = true }) =>
    {
      const baseEntity = EntityFactory({ owner, name, id, createdAt, updatedAt, type });

      let _icon = icon || genericIcon;
      let _tasks = tasks;
      let _isActive = isActive;
      let _isEditable = isEditable;
      let _taskCount = _tasks.length;

      const _checkEdit = () =>
      {
        if (!isEditable)
        {
          console.error('Category not editable');
          return false;
        };

        return true;
      };

      const _isValidTask = (taskID) =>
      {
        if (!taskID)
        {
          console.error('Not task given');
          return false;
        };

        if (typeof taskID !== 'string')
        {
          console.error('Task ID must be a string', taskID);
          return false;
        };

        return true;
      }

      const _findIcon = (newName) =>
      {
        if (!_checkEdit()) return;

        const wordToCheck = capitaliseString(newName).split(' ');

        if (!wordToCheck || !Array.isArray(wordToCheck))
        {
          console.error('Error capitalising the name.', wordToCheck);
          return genericIcon;
        };

        for (const [, { values, iconToReturn }] of Object.entries(categoryIconMap))
        {
          for (const word of wordToCheck)
          {
            if (values.includes(word))
            {
              return iconToReturn;
            }
          };
        };

        return genericIcon;
      }

      const _setTaskCount = () => _taskCount = _tasks.length;

      const _baseData = () =>
      (
        {
          ...baseEntity.toJSON(),
          icon: _icon,
          tasks: _tasks,
          taskCount: _taskCount,
          isActive: _isActive,
          isEditable: _isEditable,
        }
      )

      const _setNameWithEditCheck = (newName) =>
      {
        if (!_checkEdit()) return;
        const nameSet = baseEntity.setName(newName);
        if (nameSet)
        {
          _icon = _findIcon(newName);
        };

        console.log(_baseData());
        baseEntity.sendData(_baseData);
        return true;
      }

      return {
        ...baseEntity,
        setName: _setNameWithEditCheck,
        addTask: (taskID) =>
        {
          if (!_checkEdit()) return;
          if (!_isValidTask(taskID)) return;

          _tasks.push(taskID);
          _setTaskCount();
          baseEntity.sendData(_baseData);
          return true;
        },
        deleteTask: (taskID) =>
        {
          if (!_checkEdit()) return;
          if (!_isValidTask(taskID)) return;

          const index = _tasks.findIndex(id => id === taskID);

          if (index === -1)
          {
            return errorHandler({ message: 'Task not found in category', variables: { taskID }, returnValue: null });
          };

          _tasks.splice(index, 1);
          _setTaskCount();
          baseEntity.sendData(_baseData);
          return true;
        },
        getIcon: () => _icon,
        getTasks: () => _tasks,
        getIsActive: () => _isActive,
        getIsEditable: () => _isEditable,
        getTaskCount: () => _taskCount,
        toJSON: () => ({ ..._baseData() }),
      }
    }
  }
)()

export default CategoryFactory;
