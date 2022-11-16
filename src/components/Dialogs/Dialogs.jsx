import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


export default function Dialogs(props) {
    let state = props.dialogsPage;
    let dialogsElements = state.dialogs
        .map((e, i) => <DialogItem key={i+1} id={e.id} name={e.name} photo={e.photo}/>);

    let messagesElements = state.messages
        .map((e, i) => <Message key={i+1} id={e.id} message={e.message}/>);

    let newMessageText = state.newMessageText;

    function onNewMessgeChange(e) {
        let text = e.target.value;
        props.updateMessage(text);
      }

    function onSendMessageClick () {
        props.sendMessage();
        }

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                {messagesElements}
                <div>
                    <textarea
                        placeholder='Enter your message'
                        value={newMessageText}
                        onChange={onNewMessgeChange}
                    >   
                    </textarea>
                </div>
                <div>
                    <button onClick={onSendMessageClick}>Send message</button>
                </div>
            </div>
        </div>
    )
}