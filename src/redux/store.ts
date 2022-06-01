import { createStore, combineReducers } from 'redux'
import { settingsReducer } from './reducers/settingsReducer'

const rootReducer = combineReducers({
    settings: settingsReducer
})

export const store = createStore(rootReducer)

export type RootState = ReturnType<typeof rootReducer>