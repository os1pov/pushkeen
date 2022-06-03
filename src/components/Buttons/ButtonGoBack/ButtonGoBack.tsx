import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import classNames from 'classnames'
import './ButtonGoBack.scss'
import './ButtonGoBackLarge.scss'

const ButtonGoBack = () => {
    const { version } = useTypedSelector(state => state.settings)
    const navigate = useNavigate()

    const buttonGoBackClass = classNames({
        "button-go-back": true,
        "button-go-back__LARGE": version === "large"
    })

    return <div className={buttonGoBackClass} onClick={() => navigate(-1)}>Вернуться</div>
}

export default ButtonGoBack