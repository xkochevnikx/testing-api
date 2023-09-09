export const reducer = (state, { type, payload }) => {
    switch (type) {
        case 'GET_USERS':
            return { ...state, users: payload };
        case 'ADD_USER':
            return {
                ...state,
                users: [...state.users, payload],
            };
        case 'CHANGE_SORT':
            return {
                ...state,
                sort: !state.sort,
            };
        case 'SELECTED_TO_REMOVE':
            return {
                ...state,
                selected: payload,
            };

        default:
            return state;
    }
};
