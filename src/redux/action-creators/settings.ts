import { SettingsActionTypes, SetVersion, Version } from '../../types/settingsTypes'

export const setVersion = (version: Version): SetVersion => ({type: SettingsActionTypes.SET_VERSION, payload: version})