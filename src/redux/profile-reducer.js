import {usersAPI, profileAPI} from '../api/api';
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        {id: 1, message: 'It`s my firs`t post', likesCount: 32},
        {id: 2, message: 'It`s my second post', likesCount: 24},
        {id: 3, message: 'Hi, how are you?', likesCount: 12},],
    profile: null,
    status: '',
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: 
        const newPost = {
            id: 6, 
            message: action.newPostBody, 
            likesCount: 0
        }
        return {
            ...state,
            posts: [...state.posts, newPost],
        }
        case SET_USER_PROFILE:
            return {
                ...state, profile: action.profile,
            }
        case SET_STATUS:
            return {
                ...state, status: action.status,
            }
        default:
            return state;
    }
}

export const addPostActionCreater = (newPostBody) => ({type: ADD_POST, newPostBody});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});

export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId)
        .then(res => {
            dispatch(setUserProfile(res.data));
        })
}
export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(res => {
            dispatch(setStatus(res.data));
        })
}
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(res => {
            if(res.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        })
}

export default profileReducer;