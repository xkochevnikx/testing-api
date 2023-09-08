import { MainPage } from '../pages/MainPage/MainPage';
import { useTheme } from '../shared/hooks/useTheme';

function App() {
    const { theme } = useTheme();

    return (
        <div className={`app ${theme}`}>
            <MainPage />
        </div>
    );
}

export default App;
