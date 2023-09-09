import React, { useContext } from 'react';
import { UsersContext } from '../../app/usersContext/usersContext';
import { useUsers } from '../../shared/hooks/useUsers';
import cls from './UserList.module.css';

export const UsersList = () => {
    const { state } = useContext(UsersContext);

    const sortedUsers = useUsers(state.users, state.sort);

    return (
        <section className={cls.listWrapper}>
            <ul className={cls.listTitle}>
                <li>Name</li>
                <li>Age</li>
                <li>Subscribtion</li>
                <li>Employment</li>
            </ul>
            {sortedUsers.map((user) => (
                <ul key={user.id} className={cls.userList}>
                    <li>{user.name}</li>
                    <li>{user.age}</li>
                    <li>{user.subscribe}</li>
                    <li>{user.employed ? 'Employed' : 'Unemployed'}</li>
                </ul>
            ))}
        </section>
    );
};
