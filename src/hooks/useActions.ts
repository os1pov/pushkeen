import { bindActionCreators } from 'redux'
import { useDispatch } from 'react-redux'
import * as settingsActionCreators from '../redux/action-creators/settings'
import * as usersActionCreators from '../redux/action-creators/users'
import * as postsActionCreators from '../redux/action-creators/posts'
import * as commentsActionCreators from '../redux/action-creators/comments'

export const useActions = () => {
    const dispatch = useDispatch()
    const actions = {
        ...settingsActionCreators,
        ...usersActionCreators,
        ...postsActionCreators,
        ...commentsActionCreators
    }
    return bindActionCreators(actions, dispatch)
}