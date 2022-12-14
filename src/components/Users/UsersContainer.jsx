import React from "react";
import { connect } from 'react-redux';
import axios from 'axios'; // может удалить?
import Users from './Users';
import { follow, 
        unfollow,
        setCurrentPage, 
        getUsers
} from '../../redux/users-reduser';

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers((this.props.currentPage));
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers((pageNumber));
    }

    render() {
        return (
            <>
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    unfollow={this.props.unfollow}
                    follow={this.props.follow}
                    users={this.props.users}
                    onPageChanged={this.onPageChanged}
                    isFetching={this.props.isFetching}
                    isFollowingProgres={this.props.isFollowingProgres}
                />
            </>
            )
    }   
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isFollowingProgres:state.usersPage.isFollowingProgres
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(follow(userId));
//         },
//         unfollow: (userId) => {
//             dispatch(unfollow(userId));
//         },
//         setUsers: (users) => {
//             dispatch(setUsers(users));
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPage(pageNumber));
//         },
//         setUsersTotalCount: (totalCount) => {
//             dispatch(setUsersTotalCount(totalCount));
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetching(isFetching));
//         }

//     }
// }// старое, удалить когда будет работать с интернетом

 export default connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    getUsers,
})(UsersContainer);
//  export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
