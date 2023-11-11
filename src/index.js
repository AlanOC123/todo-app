import storageModule from './utils/storageModule.js';
import createProfileModule from '../profileCreatorModule/createProfile.js';

if (!storageModule.getSettingsFromStorage()) {
  createProfileModule.createProfile();
} else {
  createProfileModule.generateProfile();
}

storageModule._clearStorage();