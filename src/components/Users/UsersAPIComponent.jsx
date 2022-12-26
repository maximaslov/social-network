// import React from "react";
// import axios from 'axios';
// import Users from './Users';

// class UsersAPIComponent extends React.Component {

//     componentDidMount() {
//         this.props.toggleIsFetching(true);
//         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
//         .then(res => {
//             this.props.toggleIsFetching(false);
//             this.props.setUsers(res.data.items);
//             this.props.setUsersTotalCount(res.data.totalCount);
//         })
//     }

//     onPageChanged = (pageNumber) => {
//         this.props.toggleIsFetching(true);
//         this.props.setCurrentPage(pageNumber);
//         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
//         .then(res => {
//             this.props.toggleIsFetching(false);
//             this.props.setUsers(res.data.items);
//         })
//     }
//     render() {
//         return (
//             <>
//             { this.props.isFetching ? <p>Loadindg...</p> : null }
//             <Users
//                 totalUsersCount={this.props.totalUsersCount}
//                 pageSize={this.pageSize}
//                 currentPage={this.props.currentPage}
//                 unfollow={this.props.unfollow}
//                 follow={this.props.follow}
//                 users={this.props.users}
//                 onPageChanged={this.onPageChanged}
//          />
//             </>
//         )
                
//     }   
// }

// export default UsersAPIComponent; 