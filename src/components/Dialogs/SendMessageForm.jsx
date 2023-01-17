import React from 'react';
import styles from './Dialogs.module.css';
import { Formik, useFormik } from "formik";
import sendMessageValidationSchema from '../../utils/validators/sendMessageValidationSchema';

const SendMessageForm = ({addNewMessage, }) => {
    const formik = useFormik ({
        initialValues: {newMessageBody: ''},
        onSubmit: () => {
            formik.resetForm();
            addNewMessage(formik.values.newMessageBody);
        },
        validationSchema: sendMessageValidationSchema,
    })

    const isError = formik.errors.newMessageBody || formik.touched.newMessageBody;

    return (
        <Formik>
            <form 
                className={styles.newMessageForm}
                onSubmit={formik.handleSubmit}>
                <div>
                    <textarea
                    className={isError ? styles.textareaError : styles.textarea}
                    value={formik.values.newMessageBody}
                    onChange={formik.handleChange}
                    type='textarea'
                    name='newMessageBody'
                    placeholder='Enter your message'/>
                </div>
                {isError ? <p className="error">{formik.errors.newMessageBody}</p> : ''}
                <button 
                disabled={!formik.values.newMessageBody || isError ? true : false} 
                className={styles.button} type={'submit'}>Send message</button>
            </form>
        </Formik>
    )
}

export default SendMessageForm;