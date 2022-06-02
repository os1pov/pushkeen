import { bindActionCreators } from 'redux'
import { useDispatch } from 'react-redux'
import * as settingsActionCreators from '../redux/action-creators/settings'
import * as usersActionCreators from '../redux/action-creators/users'

export const useActions = () => {
    const dispatch = useDispatch()
    const actions = {
        ...settingsActionCreators,
        ...usersActionCreators
    }
    return bindActionCreators(actions, dispatch)
}