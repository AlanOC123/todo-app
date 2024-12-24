import placeholderImage from '../../../shared/assets/system_user_image.jpg';
import thoughtCard from '../../thoughtBubbleModule/components/thoughtCard/thoughtCard';
import thoughtBubbleEvents from '../../thoughtBubbleModule/events/thoughtBubbleEvents';
import thoughtBubbleEventsManager from '../../thoughtBubbleModule/events/thoughtBubbleEventsManager';
import { format, isToday, isYesterday, differenceInMinutes } from 'date-fns';

export default class ThoughtBubble
{
  #thoughtID;
  #thoughtContent;
  #thoughtCreatedAt;
  #parentProject;
  #isSystemMessage;
  #isThoughtImportant;
  #thoughtCard;
  #thoughtUser;

  #generateNumericIdentifier = (length = 10) => Array.from({ length }, () => Math.floor(Math.random() * 10)).join('');

  #formatDateForUI = (dateObject) => format(dateObject, 'PP');

  #formatHourForUI = (dateObject) => format(dateObject, 'hh:mm a');

  #setThoughtID = () =>
  {  
    const thoughtDate = `C:${this.#thoughtCreatedAt}`;

    this.#thoughtID = `${thoughtDate}_${this.#generateNumericIdentifier()}`;
  }

  #setThoughtUser = () =>
  {
    if (this.#isSystemMessage)
    {
      this.#thoughtUser =
      {
        name: 'System Generated',
        picture: placeholderImage,
      }
      thoughtBubbleEventsManager.emit(thoughtBubbleEvents.messageEdited, { thought: this });
      return;
    }
    this.#thoughtUser = this.#parentProject.getProjectUserProfile();
    thoughtBubbleEventsManager.emit(thoughtBubbleEvents.messageEdited, { thought: this });
  }

  constructor(parentProject, isSystemCreated)
  {
    const now = new Date();
    this.#thoughtID = null;
    this.#thoughtContent = '';
    this.#thoughtCreatedAt = now;
    this.#parentProject = parentProject;
    this.#isSystemMessage = isSystemCreated;
    this.#isThoughtImportant = false;
    this.#setThoughtID();
    this.#setThoughtUser();
    this.#thoughtCard = thoughtCard(this);
  };

  setThoughtContent = (textMsg) =>
  {
    if (!textMsg || typeof textMsg !== 'string')
    {
      return;
    };

    this.#thoughtContent = textMsg;
    thoughtBubbleEventsManager.emit(thoughtBubbleEvents.messageEdited, { thought: this });
  }

  setIsThoughtImportant = (isImportant) => this.#isThoughtImportant = isImportant;

  getThoughtID = () => this.#thoughtID;

  getThoughtContent = () => this.#thoughtContent;

  getThoughtCreatedAt = () => this.#thoughtCreatedAt;

  getThoughtDay = () => 
  {
    const now = new Date();
    const isNew = differenceInMinutes(now, this.#thoughtCreatedAt) < 5;

    if (isNew) return 'New';

    const thoughtOccuredToday = isToday(this.#thoughtCreatedAt);

    if (thoughtOccuredToday) return 'Today';

    const thoughtOccuredYesterday = isYesterday(this.#thoughtCreatedAt);

    if (thoughtOccuredYesterday) return 'Yesterday';

    return format(this.#thoughtCreatedAt, 'PP');
  };

  getThoughtHour = () => this.#formatHourForUI(this.#thoughtCreatedAt);

  getThoughtParentProject = () => this.#parentProject;

  getIsThoughtSystemGenerated = () => this.#isSystemMessage;

  getThoughtCard = () => this.#thoughtCard;

  getThoughtUser = () => this.#thoughtUser;

  getIsThoughtImportant = () => this.#isThoughtImportant;
}