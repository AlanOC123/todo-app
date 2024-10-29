import storageModule from "../../../shared/utils/storageModule";

export default function updateToolTip(element)
{
  element.dataset.tooltip = storageModule.getSettings('name') || 'Change Name in Settings';
}