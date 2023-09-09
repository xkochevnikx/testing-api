import React from 'react';
import { ControlPanel } from '../../features/ControlPanel/ControlPanel';
import { UsersList } from '../../features/UsersList/UsersList';
import cls from './EmployeeAccounting.module.css';

const EmployeeAccounting = () => {
    return (
        <section className={cls.wrapper}>
            <ControlPanel />
            <UsersList />
        </section>
    );
};

export default EmployeeAccounting;
