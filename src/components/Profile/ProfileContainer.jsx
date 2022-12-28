import React from 'react';
import Profile from './Profile'
import { connect } from 'react-redux';
import { getUserProfile , getStatus, updateStatus} from '../../redux/profile-reducer';
import { useParams} from 'react-router-dom';


function withRouter(Children){
     return(props)=>{
        const match  = {params: useParams()};
        return <Children {...props}  match = {match}/>
    }
  }

class ProfileContainer extends React.Component {
    redirectToMainUser() {
        let userId = this.props.match.params.userId;
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

export default connect(mapStateToProps, {getUserProfile , getStatus, updateStatus})(withRouter(ProfileContainer));