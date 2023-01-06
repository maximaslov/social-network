import React from 'react';
import styles from "./AddNewPost.module.css";
import { Formik, useFormik } from "formik";
import addNewPostFormSchema from '../../../../../utils/validators/addNewPostFormSchema';

const AddNewPostForm = (props) => {
    const formik = useFormik ({
        initialValues: {newPostBody: ''},
        onSubmit: values => {
            props.addNewPost(formik.values.newPostBody);
            values.newPostBody = ''; //отсебятина
        },
        validationSchema: addNewPostFormSchema,
    })

    return (
        <Formik>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <textarea
                    className={styles.textarea}
                    value={formik.values.newPostBody}
                    onChange={formik.handleChange}
                    type='textarea'
                    name='newPostBody'
                    placeholder='Enter your text'/>
                </div>
                {(formik.errors.newPostBody && formik.touched.newPostBody) ? <p className="error">{formik.errors.newPostBody}</p> : ''}
                <button 
                disabled={!formik.values.newPostBody ? true : false} 
                className={styles.button} type={'submit'}>Add post</button>
            </form>
        </Formik>
    )
}

export default AddNewPostForm;