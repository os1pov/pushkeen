import { SettingsActionTypes, Version, SetVersion, IsLoading, SetIsLoading } from '../../types/settingsTypes'

export const setVersion = (version: Version): SetVersion => ({
    type: SettingsActionTypes.SET_VERSION,
    payload: version
})

export const setIsLoading = (isLoading: IsLoading): SetIsLoading => ({
    type: SettingsActionTypes.SET_IS_LOADING,
    payload: isLoading
})