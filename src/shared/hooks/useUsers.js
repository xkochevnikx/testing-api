import { useMemo } from 'react';

export function useUsers(users, sort) {
    const sortedUsers = useMemo(() => {
        if (sort) {
            return [...users].sort((a, b) => +b.age - +a.age);
        }
        return users;
    }, [sort, users]);

    return sortedUsers;
}

/**
 * Хук, осуществляет cортировку юзеров по возрасту
 * @users - массив сотрудников
 * @sort - флаг о необходимости сортировки
 */
