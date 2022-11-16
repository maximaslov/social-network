import React from "react";
import { updateNewPostTextActionCreater, addPostActionCreater } from '../../../redux/profile-reduser';
import StoreContext from "../../../storeContext";
import MyPosts from "./MyPosts";


export default function MyPostsContainer(props) {

  let state = props.store.getState().profilePage;

  let addPost = () => {
    props.store.dispatch(addPostActionCreater());
    }
  
  let onPostChage = (text) => {
    let action = updateNewPostTextActionCreater(text)
    props.store.dispatch(action);
  }

  return (
    // <StoreContext.Consumer>
      // {
      // (store) => 
      // (
        <MyPosts 
          updateNewPostText={onPostChage}
          addNewPost={addPost}
          // posts={store.getState().profilePage.posts}
          // newPostText={store.getState().profilePage.newPostText}
          profilePage={state}
        />
      // )
      // }
      
    // </StoreContext.Consumer>
    
  );
}