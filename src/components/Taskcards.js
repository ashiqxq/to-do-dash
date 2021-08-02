import React, { Component } from 'react'
import styles from '../styles/Taskcards.module.css'

class Taskcards extends Component {
    numbers = Array(20).fill().map((x,i)=>i)
    tasklist = this.numbers.map((id)=>
        <div className={styles.Taskcard}>
            <div className={styles.taskcheck}>
                <div className={styles.taskcheckbox}>
                    <input type="checkbox" id="card1" name="card1" value="Bike"/>
                    <label htmlFfor="card1"></label>
                </div>
                <div className={styles.tasktitle}>
                    <h3>
                        Fix the bugs in the application 
                    </h3> 
                </div>
            </div>
            <div className={styles.tic}>
                <img className={styles.taskimg} src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        alt="img"/>
            </div>
        </div>
    )
    render() {
        return (
            <div className={styles.Taskcardslist}>
                {this.tasklist}
                {/* <div className={styles.Taskcard}>
                    abc 2
                </div>
                <div className={styles.Taskcard}>
                    abc 3
                </div>
                <div className={styles.Taskcard}>
                    abc 4
                </div>
                <div className={styles.Taskcard}>
                    abc5
                </div>
                <div className={styles.Taskcard}>
                    abc6
                </div>
                <div className={styles.Taskcard}>
                    abc7
                </div>
                <div className={styles.Taskcard}>
                    abc8
                </div>
                <div className={styles.Taskcard}>
                    abc9
                </div>
                <div className={styles.Taskcard}>
                    abc10
                </div> */}
            </div>
        )
    }
}

export default Taskcards
