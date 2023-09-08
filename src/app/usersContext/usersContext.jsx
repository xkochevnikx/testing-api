import { createContext, useCallback, useReducer } from 'react';
import { reducer } from './usersReducer';

export const UsersContext = createContext();

export const UsersContextProvider = (props) => {
    const { children } = props;

    const [state, dispatch] = useReducer(reducer, {
        users: [],
        taskToEdit: {},
        sort: false,
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

    const defaultProps = {
        state,
        getUsers,
        addUser,
        changeSort,
    };

    return (
        <UsersContext.Provider value={defaultProps}>
            {children}
        </UsersContext.Provider>
    );
};
