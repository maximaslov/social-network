import React from 'react';
import styles from './ProfileInfo.module.css'

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status,
    }

    activateEditMode = () => {
        this.setState({
            editMode: true,
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false,
        })
        this.props.updateStatus(this.state.status);
    }
    
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value,
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }

    render(){
        return (
            <div>{
                !this.state.editMode 
                ? 
                <div>
                    <p onClick={this.activateEditMode}>{this.props.status || '--'}</p>
                </div>
                :
                <div>
                    <input 
                        autoFocus={true} 
                        onBlur={this.deactivateEditMode} 
                        type="text" 
                        value={this.state.status}
                        onChange={this.onStatusChange}
                    />
                </div> 
                }
            </div>
        )
    }
    
}

export default ProfileStatus;