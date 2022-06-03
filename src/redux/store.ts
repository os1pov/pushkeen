import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { settingsReducer } from './reducers/settingsReducer'
import { usersReducer } from './reducers/usersReducer'
import { postsReducer } from './reducers/postsReducer'

const rootReducer = combineReducers({
    settings: settingsReducer,
    users: usersReducer,
    posts: postsReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type RootState = ReturnType<typeof rootReducer>