import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../Dialogs.module.css";

const DialogItem = ({id, name, photo}) => {
    let path = "/dialogs/" + id;

    return (
        <div className={styles.dialogItem}>
            <NavLink className={ navData => navData.isActive ? styles.active : styles.dialog } to={path}>
                <div className={styles.dialogItemInfo}>
                    <img className={styles.dialogItemImg} src={photo} alt=""/>
                    {name}
                </div>
            </NavLink>
        </div>
    )
}

export default DialogItem;