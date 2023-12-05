import { useContext } from 'react';
import { UsersContext } from '../../app/usersContext/usersContext';
import cls from './SortSwitcher.module.css';

export const SortSwitcher = () => {
    const { changeSort } = useContext(UsersContext);

    return (
        <label className={cls.sortWrapper}>
            <input
                className={cls.checkbox}
                type="checkbox"
                onClick={() => changeSort()}
            />
            <span className={cls.sort}></span>
        </label>
    );
};
