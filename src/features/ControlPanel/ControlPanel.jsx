import React, { useContext, useEffect, useState } from 'react';
import { UsersContext } from '../../app/usersContext/usersContext';
import { MyInput } from '../../shared/ui/MyInput/MyInput';
import { MySelect } from '../../shared/ui/MySelect/MySelect';
import { MyButton } from '../../shared/ui/MyButton/MyButton';
import { LOCAL_STORAGE_USERS } from '../../shared/consts/consts';
import cls from './ControlPanel.module.css';
import { ThemeSwitcher } from '../../entities/ThemeSwitcher/ThemeSwitcher';

export const ControlPanel = () => {
    const { state, addUser, changeSort } = useContext(UsersContext);

    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [subs, setSubs] = useState('Subscribed');
    const [employed, setEmployed] = useState(false);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_USERS, JSON.stringify(state.users));
    }, [state]);

    const onAddUser = (e) => {
        e.preventDefault();
        let newUser = {
            name,
            age,
            subscribe: subs,
            employed,
            id: Date.now(),
        };
        addUser(newUser);
        setName('');
        setAge(0);
        setSubs('Subscribed');
        setEmployed(false);
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
        <div className={cls.formWrapper}>
            <form className={cls.form}>
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
                    onChange={(e) => setAge(+e.target.value)}
                />
                <MySelect
                    name="subscrib"
                    item={options}
                    onChange={(e) => setSubs(e.target.value)}
                    value={subs}
                />

                <MyInput
                    type="checkbox"
                    onChange={(e) => setEmployed(e.target.checked)}
                    className={cls.formCheckbox}
                />

                <MyButton onClick={(e) => onAddUser(e)} type="submit">
                    Insert
                </MyButton>
            </form>

            <div className={cls.switchers}>
                <ThemeSwitcher />
                <MyButton onClick={() => changeSort()}>Sort</MyButton>
            </div>

            <MyButton>Delete</MyButton>
        </div>
    );
};
