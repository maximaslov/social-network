import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { toggleIsFetching } from '../../redux/users-reduser';
import { getAuthUserData } from '../../redux/auth-reduser';
import {authAPI} from '../../api/api'

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthUserData();
    }

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
    getAuthUserData
})(HeaderContainer);