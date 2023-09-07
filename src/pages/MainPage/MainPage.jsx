import { useContext } from 'react';
import { UsersContext } from '../../app/usersContext/usersContext';

export const MainPage = () => {
    const { state } = useContext(UsersContext);
    console.log(state);

    return (
        <div>
            <input type="text" />
            <button>Отправить</button>
        </div>
    );
};
