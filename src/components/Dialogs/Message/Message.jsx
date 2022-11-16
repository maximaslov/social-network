import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../Dialogs.module.css';

export default function Message(props) {
    let message = props.message;

    return (
        <div className={styles.message}>{message}</div>
    )
}