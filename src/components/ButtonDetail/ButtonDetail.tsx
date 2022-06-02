import React from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import './ButtonDetail.scss'
import './ButtonDetailLarge.scss'

interface IProps {
    path: string
    body: string
}

const ButtonDetail: React.FC<IProps> = ({ path, body }) => {
    const { version } = useTypedSelector(state => state.settings)

    const buttonDetailClass = classNames({
        "button-detail": true,
        "button-detail__LARGE": version === "large"
    })

    return <Link to={path} className={buttonDetailClass}>{body}</Link>
}

export default ButtonDetail