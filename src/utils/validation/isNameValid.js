import storageModule from "../dataProcessing/storageModule";

export default function isNameValid(value, ...fields) {
  const currentName = storageModule.getSettings('name');
  if (!value) {
    if (currentName) {
      return false;
    }
    console.error("No Name Given");
    return false;
  }

  const MIN = 3;
  const MAX = 20;
  const PATTERN = /[A-Za-z0-9]+/;
  const length = value.length;

  if (length > MIN && length < MAX && PATTERN.test(value)) {
    return true;
  } else {
    if (currentName) {
      return false;
    }
    if (length < MIN) {
      console.error(`Invalid Name ${value}. Too Short: ${length}`);
    } else if (length > MAX) {
      console.error(`Invalid Name ${value}. Too Long: ${length}`);
    } else {
      console.error(
        `Invalid Format ${value}. Format: ${PATTERN} where value is ${value}`
      );
    }
    console.error("Invalid Name");
    return false;
  }
}
