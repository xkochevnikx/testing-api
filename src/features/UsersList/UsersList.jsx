import React, { useContext } from 'react';
import { UsersContext } from '../../app/usersContext/usersContext';
import { useUsers } from '../../shared/hooks/useUsers';

export const UsersList = () => {
    const { state } = useContext(UsersContext);

    const sortedUsers = useUsers(state.users, state.sort);

    console.log(sortedUsers);

    return <div></div>;
};
