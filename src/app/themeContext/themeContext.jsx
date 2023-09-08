import { createContext, useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY } from '../../shared/consts/consts';

/**
 * Контекс оборачивает приложение для доступа к функционалу темы в любой точке
 * @defaultTheme - дефолтная тема берется из localStorage
 *
 */

export const ThemeContext = createContext();

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY);

export const ThemeProvider = (props) => {
    const { children } = props;

    const [theme, setTheme] = useState(defaultTheme);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
