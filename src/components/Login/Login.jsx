import React from "react";
import {Formik, useFormik} from "formik";
import loginFormSchema from "../../utils/validators/LoginFormSchema";
import styles from "./Login.module.css"

const Login = () => {
    const formik = useFormik({
        initialValues: {email: "", password: "", rememberMe: false, showPassword: false},
        onSubmit: () => {
            console.log(formik.values)
            formik.resetForm();
        },
        validationSchema: loginFormSchema,
    })

    const isEmailError = formik.errors.email || formik.touched.email;
    const isPasswordError = formik.touched.password || formik.errors.password;

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
                {isEmailError ? <p className="error">{formik.errors.email}</p> : ''}

                <div>
                    <input 
                        value={formik.values.password}
                        type={formik.values.showPassword ? 'text' : 'password'}
                        name='password'
                        placeholder='password'
                        onChange={formik.handleChange}
                        />
                </div>

                {isPasswordError ? <p className="error">{formik.errors.password}</p> : ''}

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
                    className={styles.button} 
                    type={'submit'}>Log in</button>
            </form>
        </Formik>
    </div>
)}

export default Login