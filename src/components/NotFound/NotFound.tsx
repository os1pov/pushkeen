import React from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import classNames from 'classnames'
import './NotFound.scss'
import './NotFoundLarge.scss'

interface IProps {
    children: React.ReactNode
}

const NotFound: React.FC<IProps> = ({ children }) => {
    const { version } = useTypedSelector(state => state.settings)

    const notFound = classNames({
        "not-found": true,
        "not-found__LARGE": version === "large"
    })

    return (
        <div className={notFound}>
            {children}
        </div>
    )
}

export default NotFound