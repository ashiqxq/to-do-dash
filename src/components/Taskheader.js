import React, { Component } from 'react'
import styles from '../styles/Taskheader.module.css'


class Taskheader extends Component {
    render() {
        return (
            <div className={styles.Taskheader}>
                <div className={styles.Taskprojectname}>
                    <h3> Development </h3>
                </div>
                <div className={styles.selectbtn}>
                    <h3> ^ </h3>
                </div>
            </div>
        )
    }
}

export default Taskheader
