import React from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import classNames from 'classnames'
import { IUser } from '../../types/usersTypes'
import ButtonDetail from '../ButtonDetail/ButtonDetail'
import './UserCard.scss'
import './UserCardLarge.scss'

interface IProps {
    user: IUser
}

const UserCard: React.FC<IProps> = ({ user }) => {
    const { id, name, city } = user
    const { version } = useTypedSelector(state => state.settings)

    const userCardClass = classNames({
        "user-card" : true,
        "user-card__LARGE": version === "large"
    })

    return (
        <div className={userCardClass}>
            <div className="user-card__grey-block"></div>
            <div className="user-card__info">
                <div className="user-card__name">{name}</div>
                <div className="user-card__city">
                    <div>Город:</div>
                    <div>{city}</div>
                </div>
            </div>
            <div className="user-card__button">
                <ButtonDetail path={`/user/${id}`} body="Смотреть профиль" />
            </div>
        </div>
    )
}

export default UserCard