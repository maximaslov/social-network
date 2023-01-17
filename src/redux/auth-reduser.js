import { authAPI, securityAPI } from "../api/api";
const SET_USER_DATA = "SET_USER_DATA";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const GET_CAPTCHA_URL_SUCCES = "GET_CAPTCHA_URL_SUCCES";

export let initialState = {
        userId: null,
        email: null,
        login: null,
        isAuth: false,
        isFetching: false,
        captchaUrl: null,
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCES:
            return {
                ...state, ...action.payload,
            }
        case TOGGLE_IS_FETCHING :
            return {...state, isFetching: action.isFetching}
        
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const getCaptchaUrlSuccess = (captchaUrl) => ({type: GET_CAPTCHA_URL_SUCCES, payload: {captchaUrl}});

export const getAuthUserData = () => (dispatch) => {
    return authAPI.me()
    .then(res => {
        if (res.data.resultCode === 0){
            let {id, email, login} = res.data.data;
            dispatch(setAuthUserData(id, email, login, true));
        }
    })
}

export const login = (email, password, rememberMe, captcha, setStatus, setSubmitting) => (dispatch) => {
    authAPI.login(email, password, rememberMe, captcha)
    .then(res => {
        if (res.data.resultCode === 0){
            dispatch(getAuthUserData());
        }
        else { 
            if(res.data.resultCode === 10){
                dispatch(getCaptchaUrl());
            }
            setStatus(res.data.messages)
        };
        setSubmitting(false);
    })
}

export const getCaptchaUrl = () => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl));
}

export const logout = () => (dispatch) => {
    authAPI.logout()
    .then(res => {
        if (res.data.resultCode === 0){
            dispatch(setAuthUserData(null, null, null, false));
            dispatch(getCaptchaUrlSuccess(null));
        }
    })
}

export default authReducer;