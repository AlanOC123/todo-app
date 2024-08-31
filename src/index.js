import rootPage from './components/common/rootPage';
import applyTheme from './utils/state-management/applyTheme';

async function runApp() {
  const { default: storageAPI } = await import('./utils/storageAPI');

  rootPage.render();
  applyTheme();

  if (!storageAPI.getSettings('init')) {
    const { default: setup } = await import('./setup');
    setup();
  }

  storageAPI.clearSettings();
};

document.addEventListener('DOMContentLoaded', runApp);