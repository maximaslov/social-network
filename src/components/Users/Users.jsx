import React from "react";
import style from './Users.module.css';
import Preloader from '../common/Preloader/Preloader';
import { UserInfo } from "./UserInfo";
import Paginator from "../common/Paginator/Paginator";

let Users = (props) => {
    return (
        <div className={style.usersBlock}>
            { props.isFetching ? <Preloader /> : null }
            <Paginator {...props} portionSize={10}/>
            {
            props.users.map(e => {
                return (
                    <UserInfo 
                        key={e.id} 
                        userInfo={e}
                        isFollowingProgres={props.isFollowingProgres}
                        follow={props.follow}
                        unfollow={props.unfollow}
                        isAuth={props.isAuth}
                    />
                )
            })
            }
        </div>
    ) 
}

export default Users;