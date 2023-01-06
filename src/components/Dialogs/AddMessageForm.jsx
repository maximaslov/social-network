import React from 'react';
import styles from './Dialogs.module.css';
import { Formik, useFormik } from "formik";
import sendMessageValidationSchema from '../../utils/validators/sendMessageValidationSchema'

const AddMessageForm = (props) => {
    const formik = useFormik ({
        initialValues: {newMessageBody: ''},
        onSubmit: values => {
            props.addNewMessage(formik.values.newMessageBody);
            values.newMessageBody = ''; //отсебятина
        },
        validationSchema: sendMessageValidationSchema,
    })

    return (
        <Formik>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <textarea
                    className={styles.textarea}
                    value={formik.values.newMessageBody}
                    onChange={formik.handleChange}
                    type='textarea'
                    name='newMessageBody'
                    placeholder='Enter your message'/>
                </div>
                {(formik.errors.newMessageBody && formik.touched.newMessageBody) ? <p className="error">{formik.errors.newMessageBody}</p> : ''}
                <button 
                disabled={!formik.values.newMessageBody ? true : false} 
                className={styles.button} type={'submit'}>Send message</button>
            </form>
        </Formik>
    )
}

export default AddMessageForm;