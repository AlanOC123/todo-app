export default function isImageValid(file) {

  if (!file) {
    console.error('No file given');
    return false;
  }

  if (file instanceof FileList || Array.isArray(file)) {
    file = file[0];
  };

  const MAX_SIZE = 5000000;
  const EXT = /\.(jpeg|png|jpg)$/i;
  const VALID_TYPES = ['image/jpeg', 'image/jpg', 'image/png'];

  if (file.size > MAX_SIZE) {
    console.error('File too large. 5MB Max');
    return false;
  }

  if (!EXT.test(file.name) || !VALID_TYPES.includes(file.type)) {
    console.error('Invalid file type. JPEG, PNG, and JPG are accepted');
    return false;
  }

  return true;
}