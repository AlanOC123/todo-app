import storageAPI from '../../storageAPI';

export default function nameLabelChange() {
  const name = storageAPI.getSettings().name;
  if (name !== null) {
    return `Hey there ${name}. Click the Pencil to Edit.`;
  };

  return `Click the Pencil Icon to Type Your Name`;
};