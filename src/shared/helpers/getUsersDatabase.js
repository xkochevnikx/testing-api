import { LOCAL_STORAGE_USERS } from '../consts/consts';

export const getUsersDatabase = () => {
    let users = localStorage.getItem(LOCAL_STORAGE_USERS);
    return JSON.parse(users);
};
