// import React from "react";
// import style from './Users.module.css';
// import axios from 'axios';
// import userPhoto from '../../assets/img/no_photo.png';

// let Users = (props) => {
//     let getUsers = () => {
//         if(props.users.length === 0) {
//             axios.get('https://social-network.samuraijs.com/api/1.0/users').then(res => {props.setUsers(res.data.items)})
//             // props.setUsers([
//             //     {id: 1, followed: true, photoUrl:'https://lakor.com.ua/wp-content/uploads/prapor-ukrainy-fu-004.jpg', name: 'Max', status: 'Im a boss', location: {city: 'Minsk', country: 'Ukraine'}},
//             //     {id: 2, followed: false, photoUrl:'https://www.perunica.ru/uploads/posts/2019-03/1552932077_1.jpg', name: 'Andrew', status: 'Im a boss', location: {city: 'Moscow', country: 'Ukraine'}},
//             //     {id: 3, followed: true, photoUrl:'https://www.perunica.ru/uploads/posts/2019-03/1552932077_1.jpg', name: 'Alexa', status: 'Im a boss', location: {city: 'Rostov on Don', country: 'Ukraine'}},
//             //     {id: 4, followed: true, photoUrl:'https://www.perunica.ru/uploads/posts/2019-03/1552932077_1.jpg', name: 'Siri', status: 'Im a boss', location: {city: 'Minsk', country: 'Ukraine'}},
//             //     {id: 5, followed: false, photoUrl:'https://www.perunica.ru/uploads/posts/2019-03/1552932077_1.jpg', name: 'Alisa', status: 'Im a boss', location: {city: 'Minsk', country: 'Ukraine'}},
//             //     {id: 6, followed: true, photoUrl:'https://www.perunica.ru/uploads/posts/2019-03/1552932077_1.jpg', name: 'Bony', status: 'Im a boss', location: {city: 'Minsk', country: 'Ukraine'}},
//             // ]);
//         }
//     }
    
    
//     let users = props.users.map(e => {
//     return (
//         <div className={style.user} id={e.id} key={e.id}>
//             <div className="userInfo">
//                 <p className="username">{e.name}</p>
//                 <div className={style.userPhoto}>
//                     <img src={e.photos.small != null ? e.photos.small : userPhoto} alt="user photo" />
//                 </div>
//             </div>
            
//             <div className="status">
//                 <p className="statusText">{e.status}</p>
//             </div>
//             <div className="loction">
//                 <p className="locatonCity">{"e.location.city"}</p>
//                 <p className="locatonCountry">{"e.location.country"}</p>
//                 </div>
//             {e.followed 
//                 ? <button 
//                     className={style.unfollowBtn}
//                     onClick={() => props.unfollow(e.id)}>
//                     Unfollow</button>
//                 : <button 
//                     className={style.followBtn}
//                     onClick={() => props.follow(e.id)}>
//                     Follow</button>
//             }
//         </div>
//         )
//     });
//     return (<div className={style.usersBlock}>
//         <button onClick={getUsers}>Get users</button>
//         {users}
//         </div>)
// }

// export default Users;