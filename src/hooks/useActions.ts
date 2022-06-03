import { bindActionCreators } from 'redux'
import { useDispatch } from 'react-redux'
import * as settingsActionCreators from '../redux/action-creators/settings'
import * as usersActionCreators from '../redux/action-creators/users'
import * as postsActionCreators from '../redux/action-creators/posts'

export const useActions = () => {
    const dispatch = useDispatch()
    const actions = {
        ...settingsActionCreators,
        ...usersActionCreators,
        ...postsActionCreators
    }
    return bindActionCreators(actions, dispatch)
}