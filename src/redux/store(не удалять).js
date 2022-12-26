import profileReducer from './profile-reduser';
import dialogsReducer from './dialogs-reduser';
import sidebarReducer from './sidebar-reduser';

// let store = {
//     _state: {
//         profilePage: {
//             posts: [
//                 {id: 1, message: 'It`s my firs`t post', likesCount: 32},
//                 {id: 2, message: 'It`s my second post', likesCount: 24},
//                 {id: 3, message: 'Hi, how are you?', likesCount: 12},],
//             newPostText: ''
//         },
//         dialogsPage: {
//             messages: [
//                 {id: 1, message: 'Hi'},
//                 {id: 2, message: 'How are you?'},
//                 {id: 3, message: 'Yo'},
//                 {id: 4, message: 'What is your age?'},
//                 {id: 5, message: 'Hi, I am fine!'},
//                 {id: 6, message: 'Cool!'},],
//             newMessageText: '',
//             dialogs: [
//                 {id: 1, name: 'Maxim', photo: 'https://wide-w.com/wp-content/uploads/2021/09/37.jpg'},
//                 {id: 2, name: 'Andrew', photo: 'https://i.pinimg.com/550x/a4/1d/da/a41ddae55fef329b4f74295ba758a424.jpg'},
//                 {id: 3, name: 'Svetlana', photo: 'https://steamuserimages-a.akamaihd.net/ugc/1027328734216725904/A78445AD26E88C8331629E52FC752B5B09253E71/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false'},
//                 {id: 4, name: 'Alexandr', photo: 'https://st.depositphotos.com/2680101/3651/i/450/depositphotos_36512893-stock-photo-abstract-background.jpg'},
//                 {id: 5, name: 'Viktor', photo: 'https://thumbs.dreamstime.com/b/%D0%BA%D0%B2%D0%B0%D0%B4%D1%80%D0%B0%D1%82%D0%BD%D1%8B%D0%B9-%D1%84%D0%BB%D0%B0%D0%B3-%D0%B2%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B1%D1%80%D0%B8%D1%82%D0%B0%D0%BD%D0%B8%D0%B8-134374094.jpg'},
//                 {id: 6, name: 'Valera', photo: 'https://fotogora.ru/img/blog/or/2021/11/12/20165.jpg'},],
//         },
//         sideBar: {
//             friends: [
//                 {id: 1, name: 'Egor', photo: 'https://i.pinimg.com/originals/86/95/54/8695540db1e9224367ed9d1a4884ccfc.jpg'},
//                 {id: 2, name: 'Slavik', photo: 'https://cspromogame.ru//storage/upload_images/avatars/3884.jpg'},
//                 {id: 3, name: 'Marta', photo: 'https://info-kibersant.ru/wp-content/uploads/2021/04/unnamed.jpg'},]
//         }
//     },
//     _callSubscriber () {
//         alert('state changed')
//     },
//     getState() {
//         return this._state;
//     },
//     subscribe(observer) {
//         this._callSubscriber = observer;
//     },
//     dispatch(action) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action);
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
//         this._state.sideBar = sidebarReducer(this._state.sideBar, action);

//         this._callSubscriber(this._state);
//     }
// }

// export default store;
// window.store = store;