import applyTheme from "../../../shared/utils/applyTheme";

export default function previewTheme(event)
{
  if (event.type === 'mouseenter') {
    const id = event.target.closest('.theme-card').id;
    if (!id) {
      console.error('Incorrect HTML element');
      return;
    }
    applyTheme(id);
    return;
  }

  applyTheme();
}