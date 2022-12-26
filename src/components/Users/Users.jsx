import React from "react";
import style from './Users.module.css';
import userPhoto from '../../assets/img/no_photo.png';
import Preloader from '../common/Preloader/Preloader';
import { NavLink } from 'react-router-dom';
import axios from "axios";
import {usersAPI} from '../../api/api';


let Users = (props) => {
    let padgesCount = Math.ceil(props.totalUsersCount / props.pageSize);
        let pages = [];
            for(let i = 1; i <= padgesCount; i++) {
                pages.push(i);
            };
    return (
        <div className={style.usersBlock}>
            { props.isFetching ? <Preloader /> : null }
            <div>
                {pages.map(e => <span key={e} onClick={() => {props.onPageChanged(e)}} 
                className={props.currentPage === e ? style.selectedPage : ''}
                >{e}</span>)}
            </div>
            {
                props.users.map(e => 
                    <div className={style.user} id={e.id} key={e.id}>
                        <div className="userInfo">
                            <p className="username">{e.name}</p>
                            <div className={style.userPhoto}>
                                <NavLink to={`/profile/${e.id}`}>
                                    <img src={e.photos.small != null ? e.photos.small : userPhoto} alt="user photo" />
                                </NavLink>
                            </div>
                        </div>
                        
                        <div className="status">
                            <p className="statusText">{e.status}</p>
                        </div>
                        <div className="loction">
                            <p className="locatonCity">{"e.location.city"}</p>
                            <p className="locatonCountry">{"e.location.country"}</p>
                            </div>
                        {e.followed
                            ? <button disabled={props.isFollowingProgres ? true : false}
                                className={style.unfollowBtn}
                                onClick={() => {
                                    props.unfollow(e.id)
                                        }}>
                                Unfollow</button>
                            : <button disabled={props.isFollowingProgres ? true : false}
                                className={style.followBtn}
                                onClick={() => {
                                    props.follow(e.id)
                                    }}>
                                Follow</button>
                        }
                    </div>
                    
                )
            }
        </div>
    ) 
}

export default Users;