import React from 'react';
import styles from './Dialogs.module.css';
import {Formik, Form, Field } from "formik";

const AddMessageForm = (props) => {
    return (
        <Formik
            initialValues={{newMessageBody: ''}}
            onSubmit={(values) => {
                props.addNewMessage(values)
                values.newMessageBody = ''; //отсебятина
            }}>
            {() => (
                <Form>
                    <div>
                        <Field type={'textarea'} name={'newMessageBody'} placeholder='Enter your message'/>
                    </div>
                    <button className={styles.button} type={'submit'}>Send message</button>
                </Form>
            )}
        </Formik>
    )
}

export default AddMessageForm;