import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import SendMessageForm from './SendMessageForm';

export default function Dialogs(props) {
    let state = props.dialogsPage;
    let dialogsElements = state.dialogs
        .map(e => <DialogItem key={e.id} id={e.id} name={e.name} photo={e.photo}/>);

    let messagesElements = state.messages
        .map(e => <Message key={e.id} id={e.id} message={e.message}/>);

    function addNewMessage(values) {
        props.sendMessage(values)
        // props.sendMessage(values.newMessageBody)
    }

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                {messagesElements}
                <SendMessageForm 
                    addNewMessage={addNewMessage}
                />
            </div>
        </div>
    )
}