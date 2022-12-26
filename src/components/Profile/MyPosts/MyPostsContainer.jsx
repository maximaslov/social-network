import React from "react";
import { addPostActionCreater, updateNewPostTextActionCreater} from '../../../redux/profile-reducer';
import MyPosts from "./MyPosts";
import { connect } from 'react-redux';


// export default function MyPostsContainer(props) {

//   // let state = props.store.getState().profilePage;

//   // let addPost = () => {
//   //   props.store.dispatch(addPostActionCreater());
//   //   }
  
//   // let onPostChage = (text) => {
//   //   let action = updateNewPostTextActionCreater(text)
//   //   props.store.dispatch(action);
//   // }

//   return (
//     <StoreContext.Consumer>
//       { 
//         store => {
//           let state = store.getState().profilePage;
//           let addPost = () => {
//             store.dispatch(addPostActionCreater());
//             }
          
//           let onPostChage = (text) => {
//             let action = updateNewPostTextActionCreater(text)
//             store.dispatch(action);
//           }
//           (
//             <MyPosts 
//               updateNewPostText={onPostChage}
//               addNewPost={addPost}
//               profilePage={state}
//             />
//           )
//         }
//       }
      
//     </StoreContext.Consumer>
//   );
// }

const mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
    dispatch(updateNewPostTextActionCreater(text));
  },
    addNewPost: () => {
    dispatch(addPostActionCreater());
  }
}

}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;