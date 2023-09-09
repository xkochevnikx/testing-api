import React, { useContext, useState } from 'react';
import { UsersContext } from '../../app/usersContext/usersContext';
import { MyInput } from '../../shared/ui/MyInput/MyInput';
import { MySelect } from '../../shared/ui/MySelect/MySelect';
import { MyButton } from '../../shared/ui/MyButton/MyButton';
import { LOCAL_STORAGE_USERS } from '../../shared/consts/consts';
import cls from './ControlPanel.module.css';
import { ThemeSwitcher } from '../../entities/ThemeSwitcher/ThemeSwitcher';
import { options } from '../../shared/consts/optionsTitle';

export const ControlPanel = () => {
    const { addUser, changeSort, state, getUsers } = useContext(UsersContext);

    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [subs, setSubs] = useState('Subscribed');
    const [employed, setEmployed] = useState(false);

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
        let users = localStorage.getItem(LOCAL_STORAGE_USERS);
        let dataUsers = JSON.parse(users);
        dataUsers.push(newUser);
        localStorage.setItem(LOCAL_STORAGE_USERS, JSON.stringify(dataUsers));
    };

    const removeUser = (id) => {
        let users = localStorage.getItem(LOCAL_STORAGE_USERS);
        let dataUsers = JSON.parse(users);
        let data = dataUsers.filter((user) => user.id !== id);
        localStorage.setItem(LOCAL_STORAGE_USERS, JSON.stringify(data));
        getUsers(data);
    };

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

            <MyButton onClick={() => removeUser(state.selected)}>
                Delete
            </MyButton>
        </div>
    );
};
