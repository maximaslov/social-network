import { usersAPI } from "../api/api";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_FOLLOWING_PROGRESS = "TOGGLE_FOLLOWING_PROGRESS";

let initialState = {
    users:[],
    pageSize: 5,
    totalUsersCount: null,
    currentPage: 1,
    isFetching: false,
    isFollowingProgres: false,
}

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                }),
            };
  
        case UNFOLLOW: 
        return {
            ...state,
            users: state.users.map(u => {
                if(u.id === action.userId) {
                    return {...u, followed: false}
                }
                return u;
            }),
        };

        case SET_USERS: 
            return { ...state, users: action.users};
        
        case SET_CURRENT_PAGE :
            return {...state, currentPage: action.currentPage};

        case SET_TOTAL_COUNT :
            return {...state, totalUsersCount: action.totalUsersCount};

        case TOGGLE_IS_FETCHING :
            return {...state, isFetching: action.isFetching};

        case TOGGLE_FOLLOWING_PROGRESS:
            return {...state, isFollowingProgres: action.isFollowingProgres}
        
        default:
            return state;
    }
}

export const followSucces = (userId) => ({type: FOLLOW, userId});
export const unfollowSucces = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setUsersTotalCount = (totalUsersCount) => ({type: SET_TOTAL_COUNT, totalUsersCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingProgres = (isFollowingProgres) => ({type: TOGGLE_FOLLOWING_PROGRESS, isFollowingProgres})

export const getUsers = (currentPage) => {
    return (dispatch) => {
    dispatch(toggleIsFetching(true));
    usersAPI.getUsers(currentPage).then(data => {
        dispatch(setCurrentPage(currentPage))
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setUsersTotalCount(data.totalCount));
        })
    }
}

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgres(true));
        usersAPI.follow(userId)
        .then(data => {
            if(data.resultCode === 0){
                dispatch(followSucces(userId));
            }
            dispatch(toggleFollowingProgres(false));
        })
    }
}

export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgres(true));
        usersAPI.unfollow(userId)
        .then(data => {
            if(data.resultCode === 0){
                dispatch(unfollowSucces(userId));
            }
            dispatch(toggleFollowingProgres(false));
        })
    }
}

export default usersReducer;