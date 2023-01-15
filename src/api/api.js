import axios from "axios";

const instanse =  axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY" : "af903cd2-69a3-4643-8630-32e5dc07ac86"
    }
})

export const usersAPI = {
    getUsers(currentPage=1, pageSize = 5) {
        return instanse.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data);
    },

    follow(userId) {
        return instanse.post(`follow/${userId}`).then(res => res.data);
    },

    unfollow(userId) {
        return instanse.delete(`follow/${userId}`).then(res => res.data);
    },

    getProfile(userId) {
        console.warn('Obsolete method. Please use profileAPI object.')
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instanse.get(`profile/${userId}`);
    },

    getStatus(userId) {
        return instanse.get(`profile/status/${userId}`);
    },

    updateStatus(status) {
        return instanse.put(`profile/status`, {status: status});
    }
}

export const authAPI = {
    me(){
        return instanse.get(`auth/me`);
    },

    login(email, password, rememberMe = false, captcha = null){
        return instanse.post(`auth/login`, {email, password, rememberMe, captcha});
    },

    logout(){
        return instanse.delete(`auth/login`);
    }
}

export const securityAPI = {
    getCaptchaUrl(){
        return instanse.get(`security/get-captcha-url`);
    }
}


