import EntityFactory from "./EntityFactory";
import { appEvents, appEventsManager } from "../events/appEvents";

const ProjectFactory = (() =>
{
  return ({ owner, name, id, createdAt, updatedAt, type = 'project', dueDate, components }) =>
  {
    const baseEntity = EntityFactory({ owner, name, id, createdAt, updatedAt, type });

    let _dueDate = dueDate ? new Date(dueDate) : null;
    let _components = components || {};
    let _status = 'Not Started';
    let _completedAt = null;
    let _componentCount = Object.keys(_components).length;
    let _isConstructed = false;

    const _baseData =
    (
      {
        ...baseEntity.toJSON(),
        dueDate: _dueDate ? _dueDate.toISOString() : null,
        components: _components,
        componentCount: _componentCount,
        status: _status,
        completeAt: _completedAt ? _completedAt.toISOString() : null,
        isConstructed: _isConstructed,
      }
    );

    const _isOverDue = (newDate) => isAfter(newDate, _dueDate);

    const _setComponentCount = () => _componentCount = Object.keys(_components).length;

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
      if (_isOverDue(new Date()))
      {
        _status = 'Overdue';
        baseEntity.sendData(_baseData);
        return true;
      };

      _status = newStatus;
      return true;
    }

    const _checkStatus = (dataObj) =>
    {
      if (Object.keys(dataObj).length === 0) return 'Not Started';
      let countMap =
      {
        'Not Started': 0,
        'In Progress': 0,
        'Complete': 0,
      };
      if (!dataObj) return errorHandler({ message: 'No object provided', variables: { dataObj } });
      for (const [_, status] of Object.entries(dataObj))
      {
        countMap[status]++;
      };

      if (countMap['Complete'] === _componentCount) return 'Complete';
      if (countMap['Not Started'] === _componentCount) return 'Not Started';
      return 'In Progress';
    }

    const _componentStatusUpdated = (id) =>
    {
      const currentStatus = _status;
      if (!id) return errorHandler({ message: 'No Components provided', variables: { id }});
      if (!_components[id]) return errorHandler({ message: 'Component not found', variabled: { id, _components } });

      const newStatus = _checkStatus(_components);
      if (newStatus === currentStatus) return false;

      _setStatus(newStatus);
      baseEntity.sendData(_baseData);
      return true;
    };

    const _initialiseStatus = () =>
    {
      const newStatus = _checkStatus(_components);
      _setStatus(newStatus);
    };

    _initialiseStatus();
    appEventsManager.on(appEvents.projectComponentStatusUpdated, _componentStatusUpdated);

    return {
      setDueDate: (newDate) =>
      {
        if (!newDate || typeof newDate !== 'string') return errorHandler({ message: 'Invalid date provided', variables: { newDate } });

        _dueDate = new Date(newDate);
        baseEntity.sendData(_baseData);
        return true;
      },
      checkStatus: _checkStatus,
      addComponent: ({ id, status }) =>
      {
        if (!id || !status) return errorHandler({ message: 'No component provided', variables: { id, status } });

        _components[id] = status;
        _setComponentCount();
        if (!_isConstructed) return true;

        baseEntity.sendData(_baseData);
        _componentStatusUpdated(id);
        return true;
      },
      deleteComponent: (id) =>
      {
        if (!id) return errorHandler({ message: 'No component provided', variables: { id } });

        if (!_components[id]) return errorHandler({ message: 'Component not found', variables: { id, _components } });

        _components[id] = undefined;
        _setComponentCount();
        baseEntity.sendData(_baseData);
        _componentStatusUpdated(id);
        return true;
      },
      getDueDate:() => _dueDate,
      getComponents: () => _components,
      getComponentCount: () => _componentCount,
      getStatus: () => _status,
      setIsConstructed: () => _isConstructed = true,
      toJSON: () => ({ ..._baseData() }),
    }
  }
})();

export default ProjectFactory;
