import timeManager from "../../../shared/utils/timeManager";

export default function updateClock(element)
{
    element.textContent = `${timeManager.day} ${timeManager.date} ${timeManager.month} ${timeManager.hour}:${timeManager.minute}`;
}