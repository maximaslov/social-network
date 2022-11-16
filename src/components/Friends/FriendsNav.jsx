import React from 'react';
import Friend from './Friend';
import style from './Friends.module.css';

export default function FriendsNav(props) {
    let friendsElements = props.friends
        .map (e => <Friend key={e.id} name={e.name} photo={e.photo}/>);
    return (
        <div className={style.friendNav}>
            <p>Friends</p>
            <div className={style.navFriendsBlock}>
                {friendsElements}
            </div>
        </div>
    )
}