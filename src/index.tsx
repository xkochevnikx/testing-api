import { createRoot } from 'react-dom/client';
import './app/styles/index.css';
import App from './app/App';
import { ThemeProvider } from './app/themeContext/themeContext';

const container = document.getElementById('root');
if (!container) {
    throw new Error('контейнер root не найден');
}
const root = createRoot(container);
root.render(
    <ThemeProvider>
        <App />
    </ThemeProvider>
);
