import { getAuthUserData } from "./auth-reduser";
const INITIALIZED_SUCCES = "INITIALIZED_SUCCES";

let initialState = {
        initialized: false,
        redirect: true,
}

const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case INITIALIZED_SUCCES:
            return {
                ...state,
                initialized: true,
            };
        default:
            return state;
    }
}

export const initializedSucces = () => ({type: INITIALIZED_SUCCES});
export const initializeApp = () => (dispatch) => {
    let propmise = dispatch(getAuthUserData());
    Promise.all([propmise])
        .then(() => dispatch(initializedSucces()));
}

export default appReducer;