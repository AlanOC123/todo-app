import profilePicture from "../shared/components/profilePicture";
import pictureInput from "../shared/components/pictureInput";
import card from "../shared/components/card";
import textElement from "../shared/components/textElement";
import iconContainer from "../shared/components/icon";
import iconsMap from "../shared/utils/iconsMap";
import textInput from "../shared/components/textInput";
import placeholderImage from '../shared/assets/systm_user_image.jpg';
import appState from "../data/appState";

export default function settingsCard()
{
  const currentUser = appState.getCurrentUser();
  const imageSrc = currentUser?.getImage() || placeholderImage;
  const picture = profilePicture();
  picture.style.backgroundImage = `url(${imageSrc})`;

  const name = textElement(currentUser?.getName());
  const theme = iconContainer(iconsMap.themes.icon);

  const cardEl = card();
  card.append()
}
