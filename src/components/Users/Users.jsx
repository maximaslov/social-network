import React from "react";
import style from './Users.module.css';
import Preloader from '../common/Preloader/Preloader';
import { UserInfo } from "./UserInfo";

let Users = (props) => {
    
    const padgesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
        for(let i = 1; i <= padgesCount; i++) {
            pages.push(i);
        };
        
    return (
        <div className={style.usersBlock}>
            { props.isFetching ? <Preloader /> : null }
            <div>
                {pages.map(e => { 
                    return <button 
                        key={e} 
                        onClick={() => {props.onPageChanged(e)}} 
                        className={props.currentPage === e ? style.selectedPage : ''}
                    >
                        {e}
                    </button>})}
            </div>
            {
            props.users.map(e => {
                return (
                    <UserInfo 
                        key={e.id} 
                        userInfo={e}
                        isFollowingProgres={props.isFollowingProgres}
                        follow={props.follow}
                        unfollow={props.unfollow}
                    />
                )
            })
            }
        </div>
    ) 
}

export default Users;