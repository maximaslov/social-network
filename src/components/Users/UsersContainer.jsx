import React from "react";
import { connect } from 'react-redux';
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
                    onPageChanged={this.onPageChanged}
                    totalItemsCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    unfollow={this.props.unfollow}
                    follow={this.props.follow}
                    users={this.props.users}
                    isFetching={this.props.isFetching}
                    isFollowingProgres={this.props.isFollowingProgres}
                    isAuth={this.props.isAuth}
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
        isFollowingProgres:state.usersPage.isFollowingProgres,
        isAuth: state.auth.isAuth,
    }
}

 export default connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    getUsers,
})(UsersContainer);