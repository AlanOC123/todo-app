import storageModule from "./storageModule.js";

const validatorModule = (function() {
  function imageValidator(event) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      const file = event.target.files[0];
      
      if (!file) {
        alert('No File Present');
        reject('No File');
        return
      }

      reader.onload = function(e) {
        const base64String = e.target.result;
        const maxSize = 4190304;

        if (base64String.length > maxSize) {
          alert('File is Too Large. 4MB Max.');
          reject('File too Large');
        } else {
          resolve(base64String);
        }
      };

      reader.readAsDataURL(file);
    });
  }

  function nameValidator(event) {
    const userName = event.target.textContent;

    if (userName) {
      const maxLength = 24;
      if (userName.length > maxLength) {
        alert('Name too Long');
      } else {
        const settings = storageModule.getSettingsFromStorage();
        settings.userName = userName;
        storageModule.writeSettingsToStorage(settings);
      }
    }

    alert('Invalid User Name')
  }

  function themeValidator(event) {
    const target = event.target;
    target.setAttribute('data-chosen', 'true');
    console.log(target);
  }

  return {
    imageValidator,
    nameValidator,
    themeValidator
  }
})()

export default validatorModule;