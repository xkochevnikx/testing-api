import { useMemo } from 'react';
/**
 * Хук, осуществляет cортировку юзеров по возрасту
 * @users - массив сотрудников
 * @sort - флаг о необходимости сортировки
 */
export function useUsers(users, sort) {
    const sortedUsers = useMemo(() => {
        if (sort) {
            return [...users].sort((a, b) => Number(b.age) - Number(a.age));
        }
        return users;
    }, [sort, users]);

    return sortedUsers;
}
