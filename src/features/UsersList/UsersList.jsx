import React, { useContext, useEffect, useState } from 'react';
import { UsersContext } from '../../app/usersContext/usersContext';
import { useUsers } from '../../shared/hooks/useUsers';
import cls from './UserList.module.css';

export const UsersList = () => {
    const { state, selectedRemoveUser } = useContext(UsersContext);

    const [active, setActive] = useState('');

    const onRemoveHandler = (index) => {
        setActive(index);
        selectedRemoveUser(state.users[index].id);
    };

    const sortedUsers = useUsers(state.users, state.sort);

    useEffect(() => {
        setActive('');
    }, [state.users]);

    return (
        <section className={cls.listWrapper}>
            <ul className={cls.listTitle}>
                <li>Name</li>
                <li>Age</li>
                <li>Subscribtion</li>
                <li>Employment</li>
            </ul>
            {sortedUsers.map((user, index) => (
                <ul
                    key={user.id}
                    className={active === index ? cls.active : cls.userList}
                    onClick={() => onRemoveHandler(index)}
                >
                    <li>{user.name}</li>
                    <li>{user.age}</li>
                    <li>{user.subscribe}</li>
                    <li>{user.employed ? 'Employed' : 'Unemployed'}</li>
                </ul>
            ))}
        </section>
    );
};
