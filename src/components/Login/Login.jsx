import React from "react";
import { Formik, useFormik } from "formik";
import loginFormSchema from "../../utils/validators/LoginFormSchema";
import styles from "./Login.module.css";
import { login } from '../../redux/auth-reduser';
import { connect } from 'react-redux';
import { Navigate } from "react-router-dom";

const Login = (props) => {
    const formik = useFormik({
        initialValues: {email: "", password: "", rememberMe: false, showPassword: false},
        onSubmit: () => {
            console.log(formik)
            const {email, password, rememberMe} = formik.values;
            props.login(email, password, rememberMe, formik.setStatus, formik.setSubmitting);
            formik.setSubmitting(true);
            formik.resetForm();
        },
        validationSchema: loginFormSchema,
    });

    const isEmailError = formik.errors.email || formik.touched.email;
    const isPasswordError = formik.touched.password || formik.errors.password;

    if(props.isAuth) {
        return <Navigate to="/profile" replace={true} />
    }

    return (
    <div>
        <h1>Login</h1>
        <Formik>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <input 
                        value={formik.values.email}
                        type='email'
                        name='email'
                        placeholder='e-mail'
                        onChange={formik.handleChange}
                    />
                </div>

                <div>
                    <input 
                        value={formik.values.password}
                        type={formik.values.showPassword ? 'text' : 'password'}
                        name='password'
                        placeholder='password'
                        onChange={formik.handleChange}
                    />
                </div>
                {isEmailError && <div className="error">{formik.errors.email}</div>}
                {formik.values.email && isPasswordError && <div className="error">{formik.errors.password}</div>}
                {!formik.values.email && formik.status && <div>{formik.status}</div>}
                <div>
                    <input 
                        value={formik.values.rememberMe}
                        onChange={formik.handleChange} 
                        type='checkbox'
                        name='rememberMe'/>
                    <label htmlFor={'rememberMe'}> remember me </label>
                </div>

                <div>
                    <input 
                        value={formik.values.showPassword}
                        onChange={formik.handleChange} 
                        type='checkbox'
                        name='showPassword'/>
                    <label htmlFor={'showPassword'}>show password</label>
                </div>

                <button 
                    disabled={!formik.values.email || !formik.values.password || !formik.isValid ? true : false}
                    // disabled={formik.isSubmitting}
                    // disabled={!formik.values.email || !formik.values.password || !formik.isValid ? true : false}
                    className={styles.button} 
                    type={'submit'}>Log in</button>
            </form>
        </Formik>
    </div>
)}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
    }
}

export default connect(mapStateToProps, {login})(Login)