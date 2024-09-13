import './styles/common.css';
import EventsBus from './utils/events/common/eventBus';
import events from './utils/events/common/events';

async function runApp() {
  const { default: applyTheme } = await import(
    "./utils/stateManagement/common/applyTheme"
  );
  const { default: rootPage } = await import("./components/common/rootPage");
  const { default: timeController } = await import(
    "./utils/events/common/timeController"
  );
	const { default: dashboardPage } = await import('./components/dashboardComponents/dashboardPage');

	//timeController().start();

  rootPage.render();
	//EventsBus.emit(events.gradientAdded);
  dashboardPage.render();


  applyTheme();
}

document.addEventListener("DOMContentLoaded", runApp);
