import uploadPictureInput from "./components/uploadPictureInput";
import uploadButton from "./components/uploadButton";
import uploadPictureContainer from "./components/uploadPictureContainer";
import profilePicture from "../../shared/components/profilePicture";

export default (function uploadPictureModule() {
  return uploadPictureContainer
  (
    profilePicture('profile-picture'),
    uploadPictureInput(),
    uploadButton()
  )
})()