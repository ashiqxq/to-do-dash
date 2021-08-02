import React, { Component } from 'react'
import styles from '../styles/Tasklist.module.css'
import Taskfooter from './Taskfooter'
import Taskheader from './Taskheader'
import Taskcards from './Taskcards'

export class Tasklist extends Component {
    render() {
        return (
            <div className={styles.Tasklist}>
                <Taskheader/>
                <Taskcards/>
                <Taskfooter/>
            </div>
        )
    }
}

export default Tasklist
