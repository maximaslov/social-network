import React from "react";
import style from './Users.module.css';
import userPhoto from '../../assets/img/no_photo.png';
import { NavLink, Navigate } from 'react-router-dom';

export const UserInfo = (props) => {
    return (
        <div className={style.user} id={props.userInfo.id}>
                        <div className="userInfo">
                            <p className="username">{props.userInfo.name}</p>
                            <div className={style.userPhoto}>
                                <NavLink to={`/profile/${props.userInfo.id}`}>
                                    <img src={props.userInfo.photos.small != null ? props.userInfo.photos.small : userPhoto} alt="user" />
                                </NavLink>
                            </div>
                        </div>
                        
                        <div className="status">
                            <p className="statusText">{props.userInfo.status}</p>
                        </div>
                        <div className="loction">
                            <p className="locatonCity">{"location.city"}</p>
                            <p className="locatonCountry">{"location.country"}</p>
                            </div>
                        {props.userInfo.followed
                            ? <button disabled={props.isFollowingProgres ? true : false}
                                className={style.unfollowBtn}
                                onClick={() => {
                                    props.isAuth ?
                                    props.unfollow(props.userInfo.id)
                                    : alert('You must be logged in')
                                    return <Navigate to="/login" replace={true}/>
                                        }}>
                                Unfollow</button>
                            : <button disabled={props.isFollowingProgres ? true : false}
                                className={style.followBtn}
                                onClick={() => {
                                    props.isAuth ?
                                    props.follow(props.userInfo.id)
                                    : alert('You must be logged in')
                                    }}>
                                Follow</button>
                        }
                    </div>
    )
}