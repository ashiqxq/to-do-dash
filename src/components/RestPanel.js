import React, { Component } from 'react'
import styles from '../styles/RestPanel.module.css'
import Searchbar from './Searchbar'
import Taskinfo from './Taskinfo'


class RestPanel extends Component {
    render() {
        return (
            <div className={styles.RestPanel}>
                <Searchbar/>
                <Taskinfo/>
            </div>
        )
    }
}

export default RestPanel
