import ElementData from "../utils/ElementData";
import updateProfilePicture from "../utils/updateProfilePicture";
import eventsManager from "../utils/eventsManager";
import events from "../events/events";

export default function profilePicture(id)
{
  const element = new ElementData
  (
    'div',
    'profile-picture',
    {
      id: id
    },
    []
  ).renderElement()

  updateProfilePicture(element);
  eventsManager.on(events.pictureChanged, () => updateProfilePicture(element));
  return element;
}