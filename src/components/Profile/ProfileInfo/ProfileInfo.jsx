import React from 'react';
import styles from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';

export default function ProfileInfo(props) {

    if(!props.profile) {
        return <Preloader />
    }
        return (
        <div className={styles.descriptionBlock}>
            <img className={styles.banner} src='https://upload.wikimedia.org/wikivoyage/en/thumb/4/45/NVancouverBanner2.jpg/800px-NVancouverBanner2.jpg' alt=""/>
            <div>
                <p>{props.profile.fullName}</p>
                <p>{props.profile.aboutMe}</p>
                <img src={props.profile.photos.large} alt="" />
                <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
            </div> 
        </div>
    )
}