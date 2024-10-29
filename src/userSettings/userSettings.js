import userSettingsPage from "./shared/components/userSettingsPage"
import header from "../shared/components/header"
import enterNameModule from "./enterNameModule/enterNameModule"
import uploadPictureModule from "./uploadProfilePictureModule/uploadPictureModule"
import selectThemeModule from "./selectThemeModule/selectThemeModule"

export default (function userSettings()
{
  return userSettingsPage
  (
    header('Settings'),
    uploadPictureModule,
    enterNameModule,
    selectThemeModule
  )
})()
