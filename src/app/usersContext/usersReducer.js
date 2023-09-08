export const reducer = (state, { type, payload }) => {
    switch (type) {
        case 'GET_USERS':
            return { ...state, users: payload };
        case 'ADD_USER':
            return {
                ...state,
                users: [...state.users, payload],
            };

        default:
            return state;
    }
};
