import React from 'react';
import styles from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer'
import { Navigate } from 'react-router-dom';

export default function Profile(props) {
    return (
        <div>
            <ProfileInfo 
                userId={props.userId}
                isAuth={props.isAuth}
                profile={props.profile} 
                status={props.status}
                updateStatus={props.updateStatus}
                />

            {props.isAuth && <MyPostsContainer /> }
        </div>
    )
}