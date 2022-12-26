import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import styles from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer'
import { updateStatus } from '../../redux/profile-reducer';

export default function Profile(props) {
    return (
        <div>
            <ProfileInfo 
                profile={props.profile} 
                status={props.status}
                updateStatus={props.updateStatus}
                />
            <MyPostsContainer 
            // store={props.store}
            />      
        </div>
    )
}