import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import styles from '../Dialogs.module.css';
import Message from '../Message/Message';

export default function DialogItem(props) {
    let path = "/dialogs/" + props.id;

    return (
        <div className={styles.dialogItem}>
            <NavLink className={ navData => navData.isActive ? styles.active : styles.dialog } to={path}>
                <div className={styles.dialogItemInfo}>
                <img className={styles.dialogItemImg} src={props.photo} alt="photo" />
                {props.name}
                </div>
            </NavLink>
        </div>
    )
}
