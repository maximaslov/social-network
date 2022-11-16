import React from 'react';
import style from './Friends.module.css';

export default function Friend(props) {
    return (
        <div className={style.friendItem}>
            <img className={style.friendImage} src={props.photo} alt="photo"/>
            <p className={style.friendName}>{props.name}</p>
        </div>
    )
}