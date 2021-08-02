import React, { Component } from 'react'
import styles from '../styles/Taskdetail.module.css'
import RightContent from './RightContent'

class Taskdetail extends Component {
    render() {
        return (
            <div className={styles.Taskdetail}>
                <RightContent/>
            </div>
        )
    }
}

export default Taskdetail
