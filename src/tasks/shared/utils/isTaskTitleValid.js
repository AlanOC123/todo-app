export default function isTaskTitleValid(value) {

  let validFlag = false;
  let errorMessage = null;

  if (typeof value !== 'string' || !value) {
    errorMessage = 'Invalid Title Provided or is Missing.';
    return { validFlag, errorMessage };
  };

  const MAX = 50;
  const MIN = 3;

  validFlag = (value.length < MAX) && (value.length > MIN);
  
  if (!validFlag) {
    if (value.length > MAX) errorMessage = 'Title Too Long';
    if (value.length < MIN) errorMessage = 'Title Too Short';
  };

  return { validFlag, errorMessage };
}