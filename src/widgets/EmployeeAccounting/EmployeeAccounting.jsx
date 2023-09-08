import React from 'react';
import { ControlPanel } from '../../features/ControlPanel/ControlPanel';
import { UsersList } from '../../features/UsersList/UsersList';

const EmployeeAccounting = () => {
    return (
        <section>
            <ControlPanel />
            <UsersList />
        </section>
    );
};

export default EmployeeAccounting;
