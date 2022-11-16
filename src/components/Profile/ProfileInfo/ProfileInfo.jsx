import React from 'react';
import styles from './ProfileInfo.module.css'

export default function ProfileInfo() {
    return (
        <div className={styles.descriptionBlock}>
            <img className={styles.banner} src='https://upload.wikimedia.org/wikivoyage/en/thumb/4/45/NVancouverBanner2.jpg/800px-NVancouverBanner2.jpg'/>
            <div>
                ava+desc
            </div> 
        </div>
    )
}