import EntityFactory from "./EntityFactory";
import { appEvents, appEventsManager } from "../events/appEvents";

const ComponentFactory = (
  () =>
  {
    return ({ owner, name, id, createdAt, updatedAt, type = 'component', relatedTo, tasks }) =>
    {
      const baseEntity = EntityFactory({ owner, name, id, createdAt, updatedAt, type });

      let _relatedTo = relatedTo || null;
      let _tasks = tasks || {};
      let _taskCount = Object.keys(_tasks).length;
      let _status = 'Not Started';
      let _completedAt = null;
      let _isConstructed = false;

      const _baseData = () =>
      (
        {
          ...baseEntity.toJSON(),
          relatedTo: _relatedTo,
          tasks: _tasks,
          taskCount: _taskCount,
          status: _status,
          completedAt: _completedAt ? _completedAt.toISOString() : null,
          isConstructed: _isConstructed,
        }
      );

      const _setTaskCount = () => _taskCount = Object.keys(_tasks).length;

      const _setStatus = (newStatus) =>
      {
        if (!newStatus) return errorHandler({ message: 'Invalid status given', variables: { newStatus } });

        if (newStatus === 'Complete')
        {
          _status = newStatus;
          _completedAt = new Date();
          baseEntity.sendData(_baseData);
          return true;
        };

        _completedAt = null;
        _status = newStatus;
        return true;
      }

      const _checkStatus = (dataObj) =>
      {
        if (Object.keys(dataObj).length === 0) return 'Not Started';

        let countMap =
        {
          true: 0,
          false: 0,
        };
        if (!dataObj) return errorHandler({ message: 'No object provided', variables: { dataObj } });
        for (const [_, isComplete] of Object.entries(dataObj))
        {
          countMap[isComplete]++;
        };

        if (countMap[true] === _taskCount) return 'Complete';
        if (countMap[false] === _taskCount) return 'Not Started';
        return 'In Progress';
      }

      const _taskStatusUpdated = (id) =>
      {
        const currentStatus = _status;
        if (!id) return errorHandler({ message: 'No Tasks provided', variables: { id }});
        if (!_tasks[id]) return errorHandler({ message: 'Task not found', variabled: { id, _tasks } });

        const newStatus = _checkStatus(_tasks);
        if (newStatus === currentStatus) return false;

        _setStatus(newStatus);
        if (!_isConstructed) return true;
        baseEntity.sendData(_baseData);
        appEventsManager.emit(appEvents.projectComponentStatusUpdated, baseEntity.getID());
        return true;
      };

      const _initialiseStatus = () =>
      {
        const newStatus = _checkStatus(_tasks);
        _setStatus(newStatus);
      };

      _initialiseStatus();
      appEventsManager.on(appEvents.projectTaskStatusUpdated, _taskStatusUpdated);

      return {
        addTask: ({ id, isComplete }) =>
        {
          if (!id) return errorHandler({ message: 'No task provided', variables: { id, isComplete } });

          _tasks[id] = isComplete;
          _setTaskCount();
          _taskStatusUpdated(id);
          baseEntity.sendData(_baseData);
          return true;
        },
        deleteTask: (id) =>
        {
          if (!id) return errorHandler({ message: 'No task provided', variables: { id } });

          if (!_tasks[id]) return errorHandler({ message: 'Task not found', variables: { id, _tasks } });

          _tasks[id] = undefined;
          _setTaskCount();
          baseEntity.sendData(_baseData);
          _taskStatusUpdated(id);
          return true;
        },
        getTasks: () => _tasks,
        getTaskCount: () => _taskCount,
        getStatus: () => _status,
        isConstructed: () => _isConstructed = true,
        toJSON: () => ({ ..._baseData() }),
      }
    }
  }
)();

export default ComponentFactory;
