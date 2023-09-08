import { createContext, useCallback, useReducer } from 'react';
import { reducer } from './usersReducer';

export const UsersContext = createContext();

export const UsersContextProvider = (props) => {
    const { children } = props;

    const [state, dispatch] = useReducer(reducer, {
        users: [],
        taskToEdit: {},
    });

    const getUsers = useCallback((users) => {
        dispatch({ type: 'GET_USERS', payload: users });
    }, []);

    const addUser = useCallback((user) => {
        dispatch({ type: 'ADD_USER', payload: user });
    }, []);

    const defaultProps = {
        state,
        getUsers,
        addUser,
    };

    return (
        <UsersContext.Provider value={defaultProps}>
            {children}
        </UsersContext.Provider>
    );
};
