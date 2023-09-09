import { useContext, useEffect } from 'react';
import { UsersContext } from '../../app/usersContext/usersContext';
import { LOCAL_STORAGE_USERS } from '../../shared/consts/consts';
import cls from './MainPage.module.css';
import EmployeeAccounting from '../../widgets/EmployeeAccounting/EmployeeAccounting';

export const MainPage = () => {
    const { getUsers } = useContext(UsersContext);

    useEffect(() => {
        let users = localStorage.getItem(LOCAL_STORAGE_USERS);
        users
            ? getUsers(JSON.parse(users))
            : localStorage.setItem(LOCAL_STORAGE_USERS, JSON.stringify([]));
    }, []);

    return (
        <main className={cls.pageWrapper}>
            <EmployeeAccounting />
        </main>
    );
};
