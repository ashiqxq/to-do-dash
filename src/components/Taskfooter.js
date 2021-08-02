import React, { Component } from 'react'
import styles from '../styles/Taskfooter.module.css'

class Taskfooter extends Component {
    render() {
        return (
            <div className={styles.Taskfooter}>
                    <div className={styles.addTaskBtn}>
                        <h3>Add Task</h3>
                    </div>
                </div>
        )
    }
}

export default Taskfooter
