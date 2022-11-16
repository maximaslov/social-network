import React from "react";
import { NavLink } from "react-router-dom";
import FriendsNav from "../Friends/FriendsNav";
import Friends from "../Friends/FriendsNav";
import styles from './Navbar.module.css';

export default function Navbar(props) {
    return (
    <nav className={styles.nav}>
        <div className={styles.item}>
            <NavLink to="/profile" className = { navData => navData.isActive ? styles.active : styles.item }>Profile</NavLink>
        </div>
        <div className={styles.item}>
            <NavLink to="/dialogs" className = { navData => navData.isActive ? styles.active : styles.item }>Messages</NavLink>
        </div>
        <div className={styles.item}>
            <NavLink to="/news" className = { navData => navData.isActive ? styles.active : styles.item }>News</NavLink>
        </div>
        <div className={styles.item}>
            <NavLink to="/music" className = { navData => navData.isActive ? styles.active : styles.item }>Music</NavLink>
        </div>
        <div className={styles.item}>
            <NavLink to="/settings" className = { navData => navData.isActive ? styles.active : styles.item }>Settings</NavLink>
        </div>
        <div className={styles.item}>
            <NavLink to="/friends" className = { navData => navData.isActive ? styles.active : styles.item }>
                <FriendsNav friends={props.state.friends} />
            </NavLink>
        </div>
    </nav>
)
}