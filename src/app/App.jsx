import { MainPage } from '../pages/MainPage/MainPage';
import { useTheme } from '../shared/hooks/useTheme';

function App() {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme}>theme</button>
            <MainPage />
        </div>
    );
}

export default App;
