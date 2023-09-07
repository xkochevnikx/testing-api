import { createContext, useReducer } from 'react';

const INIT_STATE = {
    users: [],
};

const reducer = (state, action) => {
    switch (action.type) {
        // case :
        //     return { ...state, users: action.payload };

        default:
            return state;
    }
};

export const UsersContext = createContext();

export const UsersContextProvider = (props) => {
    const { children } = props;

    const [state, dispatch] = useReducer(reducer, INIT_STATE);

    const defaultProps = {
        state,
    };

    return (
        <UsersContext.Provider value={defaultProps}>
            {children}
        </UsersContext.Provider>
    );
};
