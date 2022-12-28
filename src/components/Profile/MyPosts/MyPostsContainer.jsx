import { addPostActionCreater } from '../../../redux/profile-reducer';
import MyPosts from "./MyPosts";
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNewPost: (newPostBody) => {
    dispatch(addPostActionCreater(newPostBody));
  }
}

}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;