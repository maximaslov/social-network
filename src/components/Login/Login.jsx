import React from "react";
import { Formik, useFormik } from "formik";
import loginFormSchema from "../../utils/validators/loginFormSchema";
import styles from "./Login.module.css";
import { login } from "../../redux/auth-reduser";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

const Login = ({login, captchaUrl, isAuth}) => {
    const formik = useFormik({
        initialValues: {email: "", password: "", rememberMe: false, showPassword: false},
        onSubmit: () => {
            const {email, password, rememberMe, captcha} = formik.values;
            login(email, password, rememberMe, captcha, formik.setStatus, formik.setSubmitting);
            console.log(rememberMe)
            formik.setSubmitting(true);
        },
        validationSchema: loginFormSchema,
    });

    const isEmailError = formik.errors.email || formik.touched.email;
    const isPasswordError = formik.touched.password || formik.errors.password;

    if(isAuth) {
        return <Navigate to="/profile" replace={true} />
    }

    return (
    <div className={styles.loginContainer}>
        <h3 className={styles.loginText}>Login</h3>
        <Formik>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <input 
                        className={styles.emailInput}
                        value={formik.values.email}
                        type='email'
                        name='email'
                        placeholder='e-mail'
                        onChange={formik.handleChange}
                    />
                </div>

                <div>
                    <input 
                        className={styles.passwordInput}
                        value={formik.values.password}
                        type={formik.values.showPassword ? 'text' : 'password'}
                        name='password'
                        placeholder='password'
                        onChange={formik.handleChange}
                    />
                </div>
                
                <div>
                    <input 
                        className={styles.checkbox}
                        value={formik.values.rememberMe}
                        onChange={formik.handleChange} 
                        type='checkbox'
                        name='rememberMe'/>
                    <label htmlFor={'rememberMe'}>remember me </label>
                </div>

                <div>
                    <input 
                        className={styles.checkbox}
                        value={formik.values.showPassword}
                        onChange={formik.handleChange} 
                        type='checkbox'
                        name='showPassword'/>
                    <label htmlFor={'showPassword'}>show password</label>
                </div>
                {captchaUrl && 
                    <div className={styles.captcha}>
                        <img src={captchaUrl} alt="captcha"/>
                        <input 
                            name='captcha'
                            onChange={formik.handleChange}
                        />
                    </div>
                }
                <button 
                    disabled={!formik.values.email || !formik.values.password || !formik.isValid ? true : false}
                    className={styles.button} 
                    type={'submit'}>
                        Log in
                </button>
                
                <div className={styles.error}>
                    {isEmailError && <div className={styles.errorMessage}>{formik.errors.email}</div>}
                    {formik.values.email && isPasswordError && <div className={styles.errorMessage}>{formik.errors.password}</div>}
                    {formik.status && <div className={styles.errorMessage}>{formik.status}</div>}
                </div>
            </form>
        </Formik>
    </div>
)}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl,
    }
}

export default connect(mapStateToProps, {login})(Login)