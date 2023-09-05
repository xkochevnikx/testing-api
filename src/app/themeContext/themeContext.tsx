import { createContext, ReactNode, useMemo, useState } from 'react';
import { Theme } from '../../shared/consts/theme';
import { LOCAL_STORAGE_THEME_KEY } from '../../shared/consts/localstorage';

export interface IThemeContextProps {
    theme?: Theme;
    setTheme?: (Theme: Theme) => void;
}

export const ThemeContext = createContext<IThemeContextProps>({});

interface IThemeProviderProps {
    children: ReactNode;
}

const defaultTheme =
    (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

export const ThemeProvider = (props: IThemeProviderProps) => {
    const { children } = props;

    const [theme, setTheme] = useState<Theme>(defaultTheme);

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
