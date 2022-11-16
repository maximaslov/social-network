const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'It`s my firs`t post', likesCount: 32},
        {id: 2, message: 'It`s my second post', likesCount: 24},
        {id: 3, message: 'Hi, how are you?', likesCount: 12},],
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.text;
            return state;
        case ADD_POST:
            const newPost = {
                id: 6, 
                message: state.newPostText, 
                likesCount: 0
            }
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        default:
            return state;
    }
}

export const updateNewPostTextActionCreater = (text) => 
({type: UPDATE_NEW_POST_TEXT, text});

export const addPostActionCreater = () => ({type: ADD_POST});

export default profileReducer;