import React from 'react';
import styles from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';
import { Navigate } from 'react-router-dom';
import userPhoto from '../../../assets/img/no_photo.png';

export default function ProfileInfo(props) {

    if(!props.profile) {
        return <Preloader />
    }

    if(!props.isAuth && !props.userId){
        return <Navigate to="/login" replace={true} />
    }

        return (
        <div className={styles.descriptionBlock}>
            {/* <img className={styles.banner} src='https://upload.wikimedia.org/wikivoyage/en/thumb/4/45/NVancouverBanner2.jpg/800px-NVancouverBanner2.jpg' alt="lake with sheaps"/> */}
            <div>
                <p>{props.profile.fullName}</p>
                <p>{props.profile.aboutMe}</p>
                <img src={props.profile.photos.large ? props.profile.photos.large : userPhoto} alt={`${props.userId} user's profile photo`} />
                <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
            </div> 
        </div>
    )
}