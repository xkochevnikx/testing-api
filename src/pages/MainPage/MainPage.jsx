import { useContext, useEffect } from 'react';
import { UsersContext } from '../../app/usersContext/usersContext';
import { LOCAL_STORAGE_USERS } from '../../shared/consts/consts';
import cls from './MainPage.module.css';
import EmployeeAccounting from '../../widgets/EmployeeAccounting/EmployeeAccounting';

export const MainPage = () => {
    const { getUsers } = useContext(UsersContext);

    useEffect(() => {
        if (localStorage.getItem(LOCAL_STORAGE_USERS) === null) {
            localStorage.setItem(LOCAL_STORAGE_USERS, JSON.stringify([]));
        } else {
            let dataUsers = localStorage.getItem(LOCAL_STORAGE_USERS);
            getUsers(JSON.parse(dataUsers));
        }
    }, []);

    return (
        <main className={cls.pageWrapper}>
            <EmployeeAccounting />
        </main>
    );
};
