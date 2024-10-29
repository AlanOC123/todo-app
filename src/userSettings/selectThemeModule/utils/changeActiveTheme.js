import setTheme from "./setTheme";
import themes from "./themes";

export default function changeActiveTheme(event)
{
  const listElement = document.querySelector('.select-theme-list');

  const activeCard = listElement.querySelector('.active');

  if (activeCard) {
    activeCard.classList.remove('active');
  };

  const chosenTheme = themes.find(theme => theme.id === event.target.id);

  setTheme(chosenTheme);
  event.target.classList.add('active');
}