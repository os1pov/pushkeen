import { bindActionCreators } from 'redux'
import { useDispatch } from 'react-redux'
import * as settingsActionCreators from '../redux/action-creators/settings'

export const useActions = () => {
    const dispatch = useDispatch()
    const actions = {...settingsActionCreators}
    return bindActionCreators(actions, dispatch)
}