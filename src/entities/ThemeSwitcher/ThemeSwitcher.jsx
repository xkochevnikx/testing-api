import React from 'react';
import { useTheme } from '../../shared/hooks/useTheme';
import cls from './ThemeSwitcher.module.css';

export const ThemeSwitcher = () => {
    const { toggleTheme } = useTheme();

    return (
        <label className={cls.switcherWrapper}>
            <input
                className={cls.checkbox}
                type="checkbox"
                onClick={toggleTheme}
            />
            <span className={cls.slider}></span>
        </label>
    );
};
