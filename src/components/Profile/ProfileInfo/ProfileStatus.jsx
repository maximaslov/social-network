import React from "react";
import styles from "./ProfileInfo.module.css";
import StatusForm from "./StatusForm";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
    }

    activateEditMode = () => {
        this.setState({
            editMode: true,
        })
    }

    updateStatus = (text) => {
        this.setState({
            editMode: false,
        })
        this.props.updateStatus(text);
    }
    
    onStatusChange = (text) => {
        this.setState({
            status: text,
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
            <div className={styles.statusContainer}>{
                !this.state.editMode 
                ? 
                <div className={styles.statusText}
                    onClick={!this.props.userId && this.activateEditMode}>
                    {this.props.status || '--'}
                    {!this.props.userId &&
                        <p className={styles.tooltipText}>Click to change status</p>
                    }
                    
                </div>
                :
                <div>
                    <StatusForm
                        updateStatus={this.updateStatus}
                        currentStatus={this.props.status}/>
                </div> 
                }
            </div>
        )
    }
}

export default ProfileStatus;