import iconsMap from '../../../shared/utils/iconsMap';
import iconContainer from '../../../shared/components/icon';
import calendarEventsManager from '../../shared/utils/calendarEventsManager';
import calendarEvents from '../../shared/events/calendarEvents';

export default function expandButton()
{
  const element = iconContainer(iconsMap.expand.icon, iconsMap.expand.label);

  element.addEventListener('click', () => 
    {
      calendarEventsManager.emit(calendarEvents.selectMenuExpanded);
    });

  return element;
}