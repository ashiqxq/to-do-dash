import React, { Component } from 'react'
import styles from '../styles/Taskcompletionbar.module.css'

class Taskcompletionbar extends Component {
    render() {
        return (
            <div className={styles.task_progress}>
                <div className={styles.task_completion_bar}>
                    <progress id="file" value="32" max="100"> </progress>
                </div>
                <div className={styles.task_completion_detail}>
                    <div className={styles.task_detail}>
                        <h5>
                            35
                        </h5>
                        <h4>
                            Completed
                        </h4>
                        
                    </div>
                    <div className={styles.task_detail}>
                        <h5>
                            65
                        </h5>
                        <h4>
                            Not Complete
                        </h4>
                    </div>
                    <div className={styles.task_detail}>
                        <h5>
                            100
                        </h5>
                        <h4>
                            All tasks
                        </h4>
                    </div>
                </div>
            </div>
        )
    }
}

export default Taskcompletionbar
