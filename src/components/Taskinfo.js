import React, { Component } from 'react'
import styles from '../styles/Taskinfo.module.css'
import Taskdetail from './Taskdetail'
import Tasklist from './Tasklist'

class Taskinfo extends Component {
    render() {
        return (
            <div className={styles.Taskinfo}>
                <Tasklist/>
                <Taskdetail/>
            </div>
        )
    }
}

export default Taskinfo
