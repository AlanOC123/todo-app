import EntityFactory from "./EntityFactory";
import errorHandler from "./errorHandler";
import checkPlural from "../shared/utils/checkPlural";
import { differenceInDays, differenceInHours, differenceInMinutes } from 'date-fns';
import { appEvents, appEventsManager } from "../events/appEvents";

const SimpleTaskFactory =
(
  () =>
  {
    return ({ owner, name, id, createdAt, updatedAt, type, relatedTo, isComplete, completedAt }) =>
    {
      const baseEntity = EntityFactory
      (
        { owner, name, id, createdAt, updatedAt, type }
      );

      let _name = baseEntity.getName();
      let _id = baseEntity.getID();
      let _isComplete = isComplete || false;
      let _completedAt = completedAt ? new Date(completedAt) : new Date();
      let _relatedTo = relatedTo || null;

      const _baseData = () =>
      (
        {
          ...baseEntity.toJSON(),
          isComplete: _isComplete,
          completedAt: _completedAt ? completedAt.toISOString() : null,
          relatedTo: _relatedTo,
        }
      )

      const _setCompletedAt = (newStatus) =>
      {
        if (newStatus) _completedAt = new Date();
        else _completedAt = null;
      }

      const _getTaskDuration = () =>
      {
        const now = new Date();
        const createdAt = baseEntity.getCreatedAt();

        const numDays = differenceInDays(now, createdAt);
        const numHrs = differenceInHours(now, createdAt);
        const numMins = differenceInMinutes(now, createdAt);
        return { numDays, numHrs, numMins };
      };

      return {
        ...baseEntity,
        setRelated: (newID) =>
        {

          if (!newID)
          {
            if (type === 'simple task')
            {
              return errorHandler({ message: 'Invalid Component Provided', variables: { newID }});
            } else
            {
              return errorHandler({ message: 'Invalid Category Provided', variables: { newID }});
            }
          }

          _relatedTo = newID;
          return true;
        },
        markComplete: (newStatus) =>
        {
          if (![true, false].includes(newStatus))
          {
            return errorHandler({ message: 'Invalid completion status', variables: { newStatus }, returnValue: null, level: 'error' });
          };
          _isComplete = newStatus;
          _setCompletedAt(newStatus);
          if (baseEntity.getType() === 'simple task')
          {
            baseEntity.sendData(_baseData);
            appEventsManager.emit(appEvents.projectTaskStatusUpdated, _id);
          };
          return true;
        },
        isComplete: () => _isComplete,
        getName: () => _name,
        getID: () => _id,
        getCompletedAt: () => _completedAt,
        getDurationMessage: () =>
        {
          const { numDays, numHrs, numMins } = _getTaskDuration();
          if (numDays > 0) return `${numDays} ${checkPlural('Day', numDays)}`;
          if (numHrs > 0) return `${numHrs} ${checkPlural('Hour', numHrs)}`;
          if (numMins >= 1) return `${numMins} ${checkPlural('Min', numMins)}`;
          return '< 1 Min';
        },
        getRelated: () => _relatedTo,
        sendData: baseEntity.sendData,
        toJSON: () => ({ ..._baseData() }),
      }
    }
  }
)()

export default SimpleTaskFactory;
