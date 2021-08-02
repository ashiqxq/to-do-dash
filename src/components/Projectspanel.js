import React, { Component } from 'react'
import styles from '../styles/Projectpanel.module.css'

class Projectspanel extends Component {
    render() {
        return (
            <div className={styles.Projectspanel}>
                <div className={styles.projectheader}>
                    <h3>Projects</h3>
                </div>
                <div className={styles.Projectbuttons}>
                    <div id={styles.prbtn1} className={styles.projectbutton}>
                        <h5>
                            Marketing
                        </h5>
                    </div>
                    <div id={styles.prbtn2} className={styles.projectbutton}>
                        <h5>
                            Programming
                        </h5>
                    </div>
                    <div id={styles.prbtn3} className={styles.projectbutton}>
                        <h5>
                            Development
                        </h5>
                    </div>
                    <div id={styles.prbtn4} className={styles.projectbutton}>
                        <h5>
                            Management                            
                        </h5>
                    </div>
                    <div id={styles.prbtn5} className={styles.projectbutton}>
                        <h5>
                            Design
                        </h5>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projectspanel
