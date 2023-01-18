import React from "react";
import styles from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import { Navigate } from "react-router-dom";
import userPhoto from "../../../assets/img/no_photo.png";

const ProfileInfo = ({
    profile, 
    status, 
    updateStatus, 
    isAuth, 
    userId}) => {
    if(!profile) {
        return <Preloader />
    }

    if(!isAuth && !userId){
        return <Navigate to="/login" replace={true} />
    }

        return (
        <div className={styles.descriptionBlock}>
            <div className={styles.descriptionContainer}>
                <h3>{profile.fullName}</h3>
                <p>{profile.aboutMe}</p>
                <img src={profile.photos.large ? profile.photos.large : userPhoto} alt={`${userId} user's profile`} />
                <ProfileStatus userId={userId} status={status} updateStatus={updateStatus} />
            </div> 
        </div>
    )
}

export default ProfileInfo;