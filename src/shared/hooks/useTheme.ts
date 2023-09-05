import { useContext } from 'react';
import { ThemeContext } from '../../app/themeContext/themeContext';
import { Theme } from '../consts/theme';
import { LOCAL_STORAGE_THEME_KEY } from '../consts/localstorage';

interface UseThemeResult {
    toggleTheme: () => void;
    theme: Theme;
}

export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    function toggleTheme() {
        const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
        setTheme?.(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    }

    return {
        theme: theme || Theme.LIGHT,
        toggleTheme,
    };
}
