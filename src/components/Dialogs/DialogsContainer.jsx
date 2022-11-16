import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { updateMessageTextActionCreater, sendMessageActionCreater } from '../../redux/dialogs-reduser';
import Dialogs from './Dialogs'


export default function DialogsContainer(props) {
    let state = props.store.getState().dialogsPage;

    const updateMessage = (text) => {
        let action = updateMessageTextActionCreater(text)
        props.store.dispatch(action);
      }

    const sendMessage = () => {
        let action = sendMessageActionCreater();
        props.store.dispatch(action);
        }

    return (
        <Dialogs
            updateMessage={updateMessage}
            sendMessage={sendMessage}
            dialogsPage={state}
            // dialogs={state.dialogsPage.dialogs} старое
            // messages={state.dialogsPage.messages}старое
            // newMessageText={state.dialogsPage.newMessageText}старое
        />
    )
}