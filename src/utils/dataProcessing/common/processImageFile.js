export function processImageFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = function () {
      resolve(reader.result);
    };

    reader.onerror = function (error) {
      reject(error);
    };

    reader.readAsDataURL(file);
  });
}

export function isValidImage(image) {
  const maxSize = 5000000;
  if (!image || !image.type.startsWith("image")) {
    return false;
  }

  if (image.size > maxSize) {
    return false;
  }

  return true;
}
