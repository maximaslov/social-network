import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

export default function Header(props) {
    return (
        <header className={styles.header}>
            <div className={styles.logoBlock}>
                <img className={styles.headerLogo} src="https://icon-library.com/images/icon-logo-png/icon-logo-png-11.jpg" alt="logo"></img>
                <h2 className={styles.headerTitle}>Social Network</h2>
            </div>
            <div className={styles.authBlock}>
                { props.isAuth    
                    ?
                    <div className={styles.loginBlock}>
                        <p>{props.login}</p> 
                        <button onClick={props.logout}>Log out</button>
                    </div>
                    : 
                    <NavLink to="/login">Login</NavLink> }
                
            </div>
        </header>
    )
}