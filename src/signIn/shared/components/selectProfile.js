import ElementData from "../../../utils/ElementData";
import newUserCard from "./newUserCard";
import userCard from "./userCard";
import storageModule from "../../../storageModule";

export default function selectProfile() {
  const userProfiles = storageModule.getUserProfiles();

  const newUser = newUserCard();

  const userCardsDisplay = new ElementData(
    "div",
    "select-user-card-display",
    {},
    [newUser]
  ).renderElement();

  const element = new ElementData("div", "select-profile", {}, [
    new ElementData("h2", "select-profile-header", {}, [
      "Select User",
    ]).renderElement(),
    userCardsDisplay,
  ]).renderElement();

  if (userProfiles)
  {
    for (const key in userProfiles)
    {
      userCardsDisplay.insertBefore(userCard(userProfiles[key]), newUser);
    }
  }
  return element;
}
