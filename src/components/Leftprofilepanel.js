import React, { Component } from 'react'
import Profilemindetail from './Profilemindetail'
import Taskcompletionbar from './Taskcompletionbar'
import styles from '../styles/Leftprofilepanel.module.css'

class Leftprofilepanel extends Component {
    render() {
        return (
            <div className={styles.Leftprofilepanel}>
                <Profilemindetail/>
                <Taskcompletionbar/>
            </div>
        )
    }
}

export default Leftprofilepanel
