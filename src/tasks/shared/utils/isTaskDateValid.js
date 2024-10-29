export default function isTaskDateValid(field) {

  let validFlag = false;
  let errorMessage = null;

  if ((!field instanceof HTMLInputElement || !field) || field.type !== 'date') {
    validityData.errorMessage = 'Date Not Provided';
    return { validFlag, errorMessage };
  };

  validFlag = field.checkValidity() && field.value !== '';

  if (!validFlag) {
    errorMessage = 'Invalid Date Format';
  }

  return { validFlag, errorMessage };
}