export default function showToolTip(event)
{
  const target = event.target.closest('#nav-menu-picture');
  target.classList.toggle('tooltip');
}