import isImageValid from '../validation/isImageValid'
import processImageFile from './processImageFile';
import setImage from "./common/setImage";

export default async function pictureInputEvent(event) {
  if (event.type !== "change") {
    console.error("Invalid image input event.");
    return;
  }

  const files = event.target.files;

  if (files.length !== 1) {
    console.error(`Error reading files from input. File: ${files}`);
    event.target.files = "";
    return;
  }

  const file = files[0];

  const isValid = isImageValid(file);

  if (!isValid) {
    console.error(`Invalid file or file type. Reading: ${file}`);
    event.target.files = "";
    return;
  }

  try {
    const base64 = await processImageFile(file);
    setImage(base64);
  } catch (error) {
    console.error(
      `Error reading file from input. Attempted to read as base64 string. Returned: ${error}`
    );
  }
}