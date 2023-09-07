import { createRoot } from 'react-dom/client';
import './app/styles/index.css';
import App from './app/App';
import { ThemeProvider } from './app/themeContext/themeContext';
import { UsersContextProvider } from './app/usersContext/usersContext';

const container = document.getElementById('root');

const root = createRoot(container);
root.render(
    <UsersContextProvider>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </UsersContextProvider>
);
