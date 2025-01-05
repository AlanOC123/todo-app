import SimpleTaskFactory from "./SimpleTaskFactory";
import errorHandler from "./errorHandler";
import {
  isAfter, isSameDay,
  differenceInMonths, differenceInDays,
  differenceInHours, differenceInMinutes
} from "date-fns";
import checkPlural from "../shared/utils/checkPlural";
import { appEvents, appEventsManager } from "../events/appEvents";

const ComplexTaskFactory =
(
  () =>
  {
    return (
      {
        owner, name, id, createdAt, updatedAt, type, relatedTo,
        isComplete, completedAt,
        priority, difficulty, status, dueDate, isDraft,
      }
    ) =>
    {
      const baseEntity = SimpleTaskFactory({
        owner, name, id, createdAt, updatedAt, type, relatedTo,
        isComplete, completedAt
      });

      let _priority = priority || 'Low';
      let _difficulty = difficulty || 'Easy';
      let _status = status || 'Not Started';
      let _dueDate = dueDate ? new Date(dueDate) : null;
      let _isDraft = typeof isDraft === 'boolean' ? isDraft: true;

      const _isValid = (name, id, dueDate) =>
      {
        return name && typeof name === 'string' && name !== 'Type Task Name'
        && id && typeof id === 'string'
        && dueDate && dueDate instanceof Date && !isNaN(dueDate.getTime());
      };

      const _isOverDue = (newDate) => isAfter(newDate, _dueDate);

      const _checkCompletion = (newStatus) =>
      {
        if (baseEntity.isComplete()) _status = newStatus = 'Complete';
        if (newStatus === 'Complete')
        {
          baseEntity.markComplete(true);
          return true;
        };

        baseEntity.markComplete(false);

        if (_isOverDue(new Date()))
        {
          _status = 'Overdue';
          return true;
        };
      };

      const _getTimeLeft = (currentDate = new Date()) =>
      {
        if (_isOverDue(currentDate)) return { status: 'Overdue' };
        const monthsLeft = differenceInMonths(dueDate, currentDate);
        const daysLeft = differenceInDays(dueDate, currentDate);
        const hrsLeft = differenceInHours(dueDate, currentDate);
        const minsLeft = differenceInMinutes(dueDate, currentDate);
        if (minsLeft < 30) return { status: 'Running Out' };
        return { status: null, monthsLeft, daysLeft, hrsLeft, minsLeft };
      }

      const _baseData = () => ({
        ...baseEntity.toJSON(),
        priority: _priority,
        difficulty: _difficulty,
        status: _status,
        dueDate: _dueDate ? _dueDate.toISOString() : null,
        isDraft: _isDraft,
      });

      return {
        ...baseEntity,
        setPriority: (newPriority) =>
        {
          if (!newPriority || typeof newPriority !== 'string')
          {
            return errorHandler({ message: 'Invalid priority type', variables: { newPriority }, returnValue: null });
          };

          _priority = newPriority;
          baseEntity.sendData(_baseData);
          return true;
        },
        setDifficulty: (newDifficulty) =>
        {
          if (!newDifficulty || typeof newDifficulty !== 'string')
          {
            return errorHandler({ message: 'Invalid difficulty type', variables: { newDifficulty }, returnValue: null });
          };

            _difficulty = newDifficulty;
            baseEntity.sendData(_baseData);
            return true;
        },
        setStatus: (newStatus) =>
        {
          if (!newStatus || typeof newStatus !== 'string')
          {
            return errorHandler({ message: 'Invalid status type', variables: { newStatus }, returnValue: null });
          };

          _status = newStatus;
          _checkCompletion(newStatus);
          baseEntity.sendData(_baseData);
          return true;
        },
        setDueDate: (newDate) =>
        {
          if (!newDate || typeof newDate !== 'string')
          {
            return errorHandler({ message: 'Invalid date. Must be a string', variables: { newDate }, returnValue: null });
          };

          _dueDate = new Date(newDate);
          _checkCompletion(_status);
          baseEntity.sendData(_baseData);
          return true;
        },
        markDraft: () =>
        {
          if (!_isValid(baseEntity.getName(), baseEntity.getID(), _dueDate))
          {
            return errorHandler({ message: 'Task not valid', variables: { name: baseEntity.getName(), id: baseEntity.getID(), date: _dueDate }, returnValue: null });
          };

          _isDraft = false;
          baseEntity.sendData(_baseData);
          return true;
        },
        getPriority: () => _priority,
        getStatus: () => _status,
        getDueDate: () => _dueDate,
        getDueDateForUI: () =>
        {
          const { status, monthsLeft, daysLeft, hrsLeft, minsLeft } = _getTimeLeft(new Date());
          if (status) return status;
          if (monthsLeft > 0) return `${monthsLeft} ${checkPlural('Month', monthsLeft)}`;
          if (daysLeft > 0) return `${daysLeft} ${checkPlural('Day', daysLeft)}`;
          if (hrsLeft > 0) return `${hrsLeft} ${checkPlural('Hour', hrsLeft)}`;
          if (minsLeft >= 30) return `${minsLeft} ${checkPlural('Min', minsLeft)}`;
        },
        toJSON: () => ({ ..._baseData() })
      };
    };
  }
)();

export default ComplexTaskFactory;
