import timeManager from "../../../shared/utils/timeManager";

export default function updateDate(element)
{
    const monthMap = 
    {
        Jan: 'Januray',
        Feb: 'February',
        Mar: 'March',
        Apr: 'April',
        May: 'May',
        Jun: 'June',
        Jul: 'July',
        Aug: 'August',
        Sep: 'September',
        Oct: 'October',
        Nov: 'November',
        Dec: 'December',
    }

    const month = monthMap[timeManager.month];
    const date = timeManager.date;
    let dateText;

    if ([1, 21, 31].includes(date)) 
    { 
        dateText = `${date}st`;
    } else if ([2, 22].includes(date))
    {
        dateText = `${date}nd`;
    } else if ([3, 23].includes(date))
    {
        dateText = `${date}rd`;
    } else {
        dateText = `${date}th`;
    }
    element.textContent = `${dateText} of ${month}`;
}