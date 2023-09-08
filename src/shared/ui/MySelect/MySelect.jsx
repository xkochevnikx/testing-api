import React from 'react';
import cls from './MySelect.module.css';

export function MySelect(props) {
    const { item, ...otherProps } = props;
    return (
        <select {...otherProps} className={cls.myInput}>
            {item.map((elem, i) => (
                <option key={i}>{elem.title}</option>
            ))}
        </select>
    );
}
