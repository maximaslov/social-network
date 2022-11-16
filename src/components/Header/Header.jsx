import React from 'react';
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <img className={styles.headerLogo} src="https://icon-library.com/images/icon-logo-png/icon-logo-png-11.jpg"></img>
            <h2 className={styles.headerTitle}>Social Network</h2>
        </header>
    )
}