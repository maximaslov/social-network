import React from 'react';
import Profile from './Profile'
import { connect } from 'react-redux';
import { getUserProfile , getStatus, updateStatus, setUserProfile} from '../../redux/profile-reducer';
import axios from 'axios';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import {usersAPI} from '../../api/api';

function withRouter(Children){
     return(props)=>{

        const match  = {params: useParams()};
        return <Children {...props}  match = {match}/>
    }
  }
//   function withRouter(Component) {
//     function ComponentWithRouterProp(props) {
//         let location = useLocation();
//         let navigate = useNavigate();
//         let params = useParams();
//         return (
//             <Component
//                 {...props}
//                 router={{ location, navigate, params }}
//             />
//         );
//     }

//     return ComponentWithRouterProp;
// }

class ProfileContainer extends React.Component {
    redirectToMainUser() {
        let userId = this.props.match.params.userId;
        // let userId = this.props.router.params.userId;
        if(!userId) {
            userId = 26923;
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        this.redirectToMainUser();
    }

    componentDidUpdate(prevProps){
        if(this.props.isMain !== prevProps.isMain) {
            if(this.props.isMain){
                this.redirectToMainUser();
            }
        }
    }

    render() {
        return (
            <div>
                <Profile {...this.props} 
                    profile={this.props.profile} 
                    status={this.props.status} 
                    updateStatus={this.props.updateStatus}
                    />  
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
})

export default connect(mapStateToProps, {getUserProfile , getStatus, getStatus, updateStatus})(withRouter(ProfileContainer));
