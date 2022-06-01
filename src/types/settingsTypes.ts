export enum SettingsActionTypes {
    SET_THEME = "SET_THEME",
    SET_VERSION = "SET_VERSION",
    SET_IS_LOADING = "SET_IS_LOADING"
}

export type Theme = "light" | "dark"
export type Version = "default" | "large"
export type IsLoading = false | true

export interface SettingsState {
    theme: Theme
    version: Version
    isLoading: IsLoading
}

export interface SetTheme {
    type: SettingsActionTypes.SET_THEME
    payload: Theme
}

export interface SetVersion {
    type: SettingsActionTypes.SET_VERSION
    payload: Version
}

export interface SetIsLoading {
    type: SettingsActionTypes.SET_IS_LOADING
    payload: IsLoading
}

export type SettingsAction = SetTheme | SetVersion | SetIsLoading