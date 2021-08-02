import React, {Component} from 'react'
import Leftprofilepanel from './Leftprofilepanel'
import styles from '../styles/LeftPanel.module.css'
import Projectspanel from './Projectspanel'
import Teampanel from './Teampanel'

class LeftPanel extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    render(){
        return (
            <div className={styles.LeftPanel}>
                <div className={styles.task_manager_name}>
                    <h3>Task Manager</h3>
                </div>
                <hr className={styles.line}/>
                <Leftprofilepanel/>
                <hr className={styles.line}/>
                <Projectspanel/>
                {/* <hr id={styles.teambreakhr} className={styles.line}/> */}
                <Teampanel/>

            </div>
        )
    }
}
export default LeftPanel