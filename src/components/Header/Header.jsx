import React from "react";
import styles from "./Header.module.css";
import { NavLink, useNavigate } from "react-router-dom";

export default function Header({isAuth, login, logout}) {
    const navigate = useNavigate();
    const navigateToMainPage = () => {
        navigate('/profile')
    }
    return (
        <header className={styles.header}>
            <div 
                onClick={navigateToMainPage}
                className={styles.logoBlock}>
                <img
                className={styles.headerLogo} 
                src="https://icon-library.com/images/icon-logo-png/icon-logo-png-11.jpg" 
                alt="logo" 
            />
                <h2 className={styles.headerTitle}>Social Network</h2>
            </div>

            <div className={styles.authBlock}>
                { isAuth    
                    ?
                    <div className={styles.loginBlock}>
                        <p>{login}</p> 
                        <button onClick={logout}>Log out</button>
                    </div>
                    : 
                    <NavLink 
                        className={styles.loginLink}
                        to="/login"
                    >
                        Login
                    </NavLink> }
            </div>
        </header>
    )
}