import React, { useContext, useEffect, useState } from 'react';
import { UsersContext } from '../../app/usersContext/usersContext';
import { MyInput } from '../../shared/ui/MyInput/MyInput';
import { MySelect } from '../../shared/ui/MySelect/MySelect';
import { MyButton } from '../../shared/ui/MyButton/MyButton';

export const ControlPanel = () => {
    const { state, addUser } = useContext(UsersContext);

    const [name, setName] = useState('');
    const [age, setAge] = useState(0);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_USERS, JSON.stringify(state.users));
    }, [state]);

    const onAddUser = (e) => {
        e.preventDefault();
        let newUser = {
            name,
            age,
            id: Date.now(),
        };
        addUser(newUser);
    };

    const options = [
        {
            title: 'Subscribed',
            selected: false,
        },
        {
            title: 'Not subscribed',
            selected: false,
        },
        {
            title: 'Other',
            selected: false,
        },
    ];
    return (
        <form>
            <MyInput
                type="text"
                placeholder="имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <MyInput
                type="number"
                placeholder="возраст"
                value={age}
                onChange={(e) => setAge(e.target.value)}
            />
            <MySelect name="subscrib" item={options} />

            <MyInput type="checkbox" />

            <MyButton onClick={(e) => onAddUser(e)} type="submit">
                Отправить
            </MyButton>
        </form>
    );
};
