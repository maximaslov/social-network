import React from 'react';
import styles from './ProfileInfo.module.css'
import { Formik, Form, Field } from 'formik';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        // status: this.props.status,
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
                <div>
                    <p onClick={this.activateEditMode}>{this.props.status || '--'}</p>
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

const StatusForm = (props) => {
    const updateStatus = (text) => {
        props.updateStatus(text);
    }

    return (
        <Formik
            initialValues={{newStatusText: props.currentStatus}}
            onSubmit={(values) => {
                updateStatus(values.newStatusText);
            }}>
            {() => (
                <Form>
                    <div>
                        <Field 
                            autoFocus={true}  
                            onBlur={e => {
                                updateStatus(e.target.value)
                            }}
                        type={'textarea'} name={'newStatusText'} placeholder='Enter your status'/>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default ProfileStatus;