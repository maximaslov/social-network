import React from "react";
import style from './Users.module.css';
import userPhoto from '../../assets/img/no_photo.png';
import { NavLink } from 'react-router-dom';

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
                            <p className="locatonCity">{"e.location.city"}</p>
                            <p className="locatonCountry">{"e.location.country"}</p>
                            </div>
                        {props.userInfo.followed
                            ? <button disabled={props.isFollowingProgres ? true : false}
                                className={style.unfollowBtn}
                                onClick={() => {
                                    props.unfollow(props.userInfo.id)
                                        }}>
                                Unfollow</button>
                            : <button disabled={props.isFollowingProgres ? true : false}
                                className={style.followBtn}
                                onClick={() => {
                                    props.follow(props.userInfo.id)
                                    }}>
                                Follow</button>
                        }
                    </div>
    )
}