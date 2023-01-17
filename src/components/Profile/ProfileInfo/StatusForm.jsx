import React from "react";
import { Formik, Form, Field } from "formik";
import styles from "./ProfileInfo.module.css";

const StatusForm = ({updateStatus, currentStatus}) => {
    const updateStatusText = (text) => {
        updateStatus(text);
    }

    return (
        <Formik 
            initialValues={{newStatusText: currentStatus}}
            onSubmit={(values) => {
                updateStatusText(values.newStatusText);
            }}>
            {() => (
                <Form>
                    <div>
                        <Field 
                            className={styles.statusForm}
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

export default StatusForm;