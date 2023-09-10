import { createContext, useCallback, useReducer } from 'react';
import { reducer } from './usersReducer';
import { LOCAL_STORAGE_USERS } from '../../shared/consts/consts';
import { getUsersDatabase } from '../../shared/helpers/getUsersDatabase';

export const UsersContext = createContext();

export const UsersContextProvider = (props) => {
    const { children } = props;

    const [state, dispatch] = useReducer(reducer, {
        users: [],
        sort: false,
        selected: null,
    });

    const getUsers = useCallback((users) => {
        dispatch({ type: 'GET_USERS', payload: users });
    }, []);

    const addUser = useCallback((user) => {
        dispatch({ type: 'ADD_USER', payload: user });
    }, []);

    const changeSort = useCallback(() => {
        dispatch({ type: 'CHANGE_SORT' });
    }, []);

    const selectedRemoveUser = useCallback((id) => {
        dispatch({ type: 'SELECTED_TO_REMOVE', payload: id });
    }, []);

    const updateUsersDatabase = (newUser) => {
        let dataUsers = getUsersDatabase();
        dataUsers.push(newUser);
        localStorage.setItem(LOCAL_STORAGE_USERS, JSON.stringify(dataUsers));
    };

    const removeUser = (id) => {
        let dataUsers = getUsersDatabase();
        let data = dataUsers.filter((user) => user.id !== id);
        localStorage.setItem(LOCAL_STORAGE_USERS, JSON.stringify(data));
        initUsers();
    };

    const initUsers = () => {
        let dataUsers = getUsersDatabase();
        dataUsers
            ? getUsers(dataUsers)
            : localStorage.setItem(LOCAL_STORAGE_USERS, JSON.stringify([]));
    };

    const defaultProps = {
        state,
        getUsers,
        addUser,
        changeSort,
        selectedRemoveUser,
        updateUsersDatabase,
        removeUser,
        initUsers,
    };

    return (
        <UsersContext.Provider value={defaultProps}>
            {children}
        </UsersContext.Provider>
    );
};
