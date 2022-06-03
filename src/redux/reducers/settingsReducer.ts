import { SettingsActionTypes, SettingsState, SettingsAction } from '../../types/settingsTypes'

const initialState: SettingsState = {
    theme: "light",
    version: "default",
    isLoading: false
}

export const settingsReducer = (state = initialState, action: SettingsAction): SettingsState => {
    switch (action.type) {
        case SettingsActionTypes.SET_VERSION:
            return {
                ...state,
                version: action.payload
            }

        case SettingsActionTypes.SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }

        default:
            return state
    }
}