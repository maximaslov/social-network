import React from 'react';
import styles from "./AddNewPost.module.css";
import { Formik, Form, Field } from "formik";

const AddNewPostForm = (props) => {
    return (
        <Formik
            initialValues={{newPostBody: ''}}
            onSubmit={(values) => {
                props.addNewPost(values.newPostBody)
                values.newPostBody = ''; //отсебятина
            }}>
            {() => (
                <Form>
                    <div>
                        <Field type={'textarea'} name={'newPostBody'} placeholder='Enter your text'/>
                    </div>
                    <button className={styles.button} type={'submit'}>Send message</button>
                </Form>
            )}
        </Formik>
    )
}

export default AddNewPostForm;