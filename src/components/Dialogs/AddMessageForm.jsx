import React from 'react';
import styles from './Dialogs.module.css';
import {Formik, Form, Field, ErrorMessage } from "formik";
import sendMessageValidationSchema from '../../utils/validators/sendMessageValidationSchema'

const AddMessageForm = (props) => {
    return (
        <Formik
            initialValues={{newMessageBody: ''}}
            onSubmit={(values) => {
                props.addNewMessage(values)
                values.newMessageBody = ''; //отсебятина
            }}
            validationSchema={sendMessageValidationSchema}>
            {() => (
                <Form>
                    <div>
                        <Field type={'textarea'} name={'newMessageBody'} placeholder='Enter your message'/>
                    </div>
                    <ErrorMessage name="newMessageBody" component="div"/>
                    <button 
                    className={styles.button} type={'submit'}>Send message</button>
                </Form>
            )}
        </Formik>
    )
}

export default AddMessageForm;