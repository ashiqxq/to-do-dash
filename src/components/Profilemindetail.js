import React, { Component } from 'react'
import ProfileNotificationBar from './ProfileNotificationBar'
import styles from '../styles/profilemindetail.module.css'
class Profilemindetail extends Component {
    render() {
        return (
            <div className={styles.profiledetail}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3IVqhaApyGHDZWKLXR4kuMMN-XmpJ8WpqaA&usqp=CAU" 
                alt="Profile pic" className={styles.profileavatar}/>
                <div className={styles.namepanel}>
                    <h2>
                        Natasha Baig
                    </h2>
                    <h5> sara.rizvi@gmail.com</h5>
                </div>
                <ProfileNotificationBar/>
            </div>
        )
    }
}

export default Profilemindetail
