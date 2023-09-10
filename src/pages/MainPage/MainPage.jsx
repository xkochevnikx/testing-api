import { useContext, useEffect } from 'react';
import { UsersContext } from '../../app/usersContext/usersContext';
import cls from './MainPage.module.css';
import EmployeeAccounting from '../../widgets/EmployeeAccounting/EmployeeAccounting';

export const MainPage = () => {
    const { initUsers } = useContext(UsersContext);

    useEffect(() => {
        initUsers();
    }, []);

    return (
        <main className={cls.pageWrapper}>
            <EmployeeAccounting />
        </main>
    );
};
