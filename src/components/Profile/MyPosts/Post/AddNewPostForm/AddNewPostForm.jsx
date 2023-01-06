import React from 'react';
import styles from "./AddNewPost.module.css";
import { Formik, useFormik } from "formik";
import addNewPostFormSchema from '../../../../../utils/validators/addNewPostFormSchema';

const AddNewPostForm = (props) => {
    const formik = useFormik ({
        initialValues: {newPostBody: ''},
        onSubmit: () => {
            formik.resetForm();
            props.addNewPost(formik.values.newPostBody);
        },
        validationSchema: addNewPostFormSchema,
    })

    const isError = formik.errors.newPostBody || formik.touched.newPostBody;

    return (
        <Formik>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <textarea
                    className={isError ? styles.textareaError : styles.textarea}
                    value={formik.values.newPostBody}
                    onChange={formik.handleChange}
                    type='textarea'
                    name='newPostBody'
                    placeholder='Enter your text'/>
                </div>
                {isError ? <p className="error">{formik.errors.newPostBody}</p> : ''}
                <button
                disabled={!formik.values.newPostBody || isError ? true : false} 
                className={styles.button} type={'submit'}>Add post</button>
            </form>
        </Formik>
    )
}

export default AddNewPostForm;