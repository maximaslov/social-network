import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import AddNewPostForm from "./Post/AddNewPostForm/AddNewPostForm";

const MyPosts = ({profilePage, addNewPost}) => {
  let state = profilePage;

  let postsItems = state.posts
    .map((e,i) => <Post key={i+1} likesCount={e.likesCount} message={e.message}/>);

  const postingNewPost = (newPostBody) => {
      addNewPost(newPostBody);
  }

  return (
    <div className={styles.postsBlock}>
      <h3>My posts</h3>
      <div>
        <AddNewPostForm addNewPost={postingNewPost}/>
      </div>
      <div>
        {postsItems.reverse()}
      </div>
    </div>
  );
}

export default MyPosts;