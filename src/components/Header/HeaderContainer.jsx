import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { toggleIsFetching } from '../../redux/users-reduser';
import { logout } from '../../redux/auth-reduser';

class HeaderContainer extends React.Component {
    render() {
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return {
        userId: state.auth.userId,
        email: state.auth.email,
        login: state.auth.login,
        isAuth: state.auth.isAuth,
        isFetching: state.auth.isFetching,
    }
}

export default connect(mapStateToProps, {
    toggleIsFetching,
    logout
})(HeaderContainer);