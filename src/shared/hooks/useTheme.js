import { useContext } from 'react';
import { ThemeContext } from '../../app/themeContext/themeContext';
import { LOCAL_STORAGE_THEME_KEY } from '../consts/consts';

export function useTheme() {
    const { theme, setTheme } = useContext(ThemeContext);

    function toggleTheme() {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme?.(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    }

    return {
        theme,
        toggleTheme,
    };
}
