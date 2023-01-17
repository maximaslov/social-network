import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo {...props} />

            {props.isAuth && <MyPostsContainer /> }
        </div>
    )
}

export default Profile;