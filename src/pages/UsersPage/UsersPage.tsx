import React, { useEffect } from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useActions } from '../../hooks/useActions'
import classNames from 'classnames'
import UserCard from '../../components/UserCard/UserCard'
import './UsersPage.scss'
import './UsersPageLarge.scss'

const UsersPage = () => {
    const { version } = useTypedSelector(state => state.settings)
    const { users } = useTypedSelector(state => state.users)
    const { setUsers } = useActions()

    const usersClass = classNames({
        users: true,
        users__LARGE: version === "large"
    })

    useEffect(() => {
        setUsers()
    }, [])

    return (
        <div className={usersClass}>
            <div className="users__container">
                {users.map(user => <UserCard key={user.id} user={user} />)}
            </div>
        </div>
    )
}

export default UsersPage