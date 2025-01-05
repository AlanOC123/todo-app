import placeholderImage from '../../../shared/assets/system_user_image.jpg';

export default function checkInit(userData)
{
  const { name, id, preferences, image } = userData;
  return name && typeof name === 'string' && name !== 'New User' && name !== 'Type Name'
  && id && typeof id === 'string'
  && preferences?.colorTheme && preferences?.colorTheme !== ''
  && image && typeof id === 'string' && image !== placeholderImage
}
