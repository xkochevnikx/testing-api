import { createContext, useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY } from '../../shared/consts/consts';

export const ThemeContext = createContext();

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY);

export const ThemeProvider = (props) => {
    const { children } = props;

    const [theme, setTheme] = useState(defaultTheme);

    const defaultProps = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [theme]
    );

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};