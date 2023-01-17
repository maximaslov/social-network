import React from "react";
import style from './Users.module.css';
import userPhoto from '../../assets/img/no_photo.png';
import { NavLink, Navigate } from 'react-router-dom';

export const UserInfo = ({
    userInfo, 
    isFollowingProgres, 
    isAuth, 
    follow, 
    unfollow}) => {
    return (
        <div className={style.user} id={userInfo.id}>
                        <div className="userInfo">
                            <p className="username">{userInfo.name}</p>
                            <div className={style.userPhoto}>
                                <NavLink to={`/profile/${userInfo.id}`}>
                                    <img src={userInfo.photos.small != null ? userInfo.photos.small : userPhoto} alt="user" />
                                </NavLink>
                            </div>
                        </div>
                        
                        <div className="status">
                            <p className="statusText">{userInfo.status}</p>
                        </div>
                        <div className="loction">
                            <p className="locatonCity">{"location.city"}</p>
                            <p className="locatonCountry">{"location.country"}</p>
                            </div>
                        {userInfo.followed
                            ? <button disabled={isFollowingProgres ? true : false}
                                className={style.unfollowBtn}
                                onClick={() => {
                                    isAuth ?
                                    unfollow(userInfo.id)
                                    : alert('You must be logged in')
                                    return <Navigate to="/login" replace={true}/>
                                        }}>
                                Unfollow</button>
                            : <button disabled={isFollowingProgres ? true : false}
                                className={style.followBtn}
                                onClick={() => {
                                    isAuth ?
                                    follow(userInfo.id)
                                    : alert('You must be logged in')
                                    }}>
                                Follow</button>
                        }
                    </div>
    )
}