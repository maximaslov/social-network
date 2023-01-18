import React from "react";
import styles from "../Dialogs.module.css";

const Message = ({message}) => {
    let messageText = message;

    return (
        <div className={styles.message}>
            <p>{messageText}</p>
        </div>
    )
}

export default Message;