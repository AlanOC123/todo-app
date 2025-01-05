import errorHandler from './errorHandler';
import { appEvents, appEventsManager } from '../events/appEvents';

const EntityFactory =
(
  () =>
  {
    return ({ owner, name, id, createdAt, updatedAt, type = 'generic' }) =>
    {
      const validName = name && typeof name === 'string';
      const validID = id && typeof id === 'string';

      if (!validName || !validID)
      {
        return errorHandler({ message: 'Invalid name or ID data', variables: { name, id }, returnValue: null })
      }

      let MIN = 2;
      let MAX = 30;

      let _owner = owner;
      let _name = name;
      let _id = id;
      let _createdAt = createdAt ? new Date(createdAt) : new Date()
      let _updatedAt = updatedAt ? new Date(updatedAt) : null;
      let _type = type;

      const _baseData = () =>
      (
        {
          owner: _owner,
          name: _name,
          id: _id,
          createdAt: _createdAt.toISOString(),
          updatedAt: _updatedAt ? _updatedAt.toISOString() : null,
          type: _type,
        }
      );

      const _sendData = ( dataProvider = _baseData ) =>
      {
        _updatedAt = new Date();
        const dataPayload = dataProvider();
        console.log(dataPayload);
        appEventsManager.emit(appEvents.userUpdated, { dataPayload });
      };

      return {
        setName: (newName) =>
        {
          console.log(newName);
          if (!newName || typeof newName !== 'string')
          {
            return errorHandler({ message: 'Name must be a valid string', variables: { newName }, returnValue: null })
          };

          const len = newName.length;

          if (len < MIN || len > MAX)
          {
            return errorHandler({ message: `Name must be between ${MIN} and ${MAX} characters`, variables: { newName, len }, returnValue: null })
          };

          _name = newName;
          _sendData();
          return true;
        },
        setUpdatedAt: (newDate) =>
        {
          if (!newDate || newDate instanceof Date)
          {
            return errorHandler({ message: `'Invalid date provided'`, variables: { newDate }, returnValue: null })
          };

          _updatedAt = newDate;
        },
        getOwner: () => _owner,
        getName: () => _name,
        getID: () => _id,
        getCreatedAt: () => _createdAt,
        getUpdatedAt: () => _updatedAt,
        getType: () => _type,
        toJSON: () => ({ ..._baseData() }),
        sendData: _sendData,
      }
    };
  }
)();

export default EntityFactory;
