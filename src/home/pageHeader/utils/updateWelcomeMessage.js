import timeManager from "../../../shared/utils/timeManager";
import storageModule from "../../../shared/utils/storageModule";

export default function updateWelcomeMessage(element) {
  let name = storageModule.getSettings("name");

  if (name) {
    name = name.split(" ")[0];
  } else {
    name = '';
  };

  const hour = timeManager.hour;
  let message;

  if (hour >= 0 && hour < 6) {
    message = `Good Night ${name}`;
  }

  if (hour >= 6 && hour < 12) {
    message = `Good Morning ${name}`;
  }

  if (hour >= 12 && hour < 17) {
    message = `Good Afternoon ${name}`;
  }

  if (hour >= 17 && hour < 21) {
    message = `Good Evening ${name}`;
  }

  if (hour >= 21) {
    message = `Good Night ${name}`;
  }

  element.textContent = message;
}
