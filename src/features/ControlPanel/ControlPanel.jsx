import React, { useContext, useState } from 'react';
import { UsersContext } from '../../app/usersContext/usersContext';
import { MyInput } from '../../shared/ui/MyInput/MyInput';
import { MySelect } from '../../shared/ui/MySelect/MySelect';
import { MyButton } from '../../shared/ui/MyButton/MyButton';
import cls from './ControlPanel.module.css';
import { ThemeSwitcher } from '../../entities/ThemeSwitcher/ThemeSwitcher';
import { options } from '../../shared/consts/optionsTitle';

export const ControlPanel = () => {
    const { addUser, changeSort, state, updateUsersDatabase, removeUser } =
        useContext(UsersContext);

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
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
        setAge('');
        setSubs('Subscribed');
        setEmployed(false);

        updateUsersDatabase(newUser);
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
