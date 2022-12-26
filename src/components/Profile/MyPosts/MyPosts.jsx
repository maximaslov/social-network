import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import { updateNewPostTextActionCreater, addPostActionCreater } from '../../../redux/profile-reducer';


export default function MyPosts(props) {
  let state = props.profilePage;

  let postsItems = state.posts
    .map((e,i) => <Post key={i+1} likesCount={e.likesCount} message={e.message}/>);
  
  let newPostElement = React.createRef();

  function onAddPost () {
    props.addNewPost();
    }
  
  function onPostChage () {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div className={styles.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea 
            ref={newPostElement}
            value={state.newPostText}
            onChange={onPostChage}
          />
        </div>
        <div>
          <button className={styles.button} onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div>
        {postsItems.reverse()}
      </div>
    </div>
  );
}