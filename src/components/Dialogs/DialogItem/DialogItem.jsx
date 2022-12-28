import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../Dialogs.module.css';

export default function DialogItem(props) {
    let path = "/dialogs/" + props.id;

    return (
        <div className={styles.dialogItem}>
            <NavLink className={ navData => navData.isActive ? styles.active : styles.dialog } to={path}>
                <div className={styles.dialogItemInfo}>
                <img className={styles.dialogItemImg} src={props.photo} alt=""/>
                {props.name}
                </div>
            </NavLink>
        </div>
    )
}
