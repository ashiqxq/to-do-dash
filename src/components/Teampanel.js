import React, { Component } from 'react'
import styles from '../styles/Teampanel.module.css'
class Teampanel extends Component {
    render() {
        return (
            <div className={styles.teampanel}>
                <div className={styles.teamheader}>
                    <h3>Team</h3>
                </div>
                <div className={styles.teamavatars}>
                    <div className={styles.teamavatar}>
                        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/35af6a41332353.57a1ce913e889.jpg" 
                            className={styles.teamimg} alt="img"/>
                    </div>
                    <div className={styles.teamavatar}>
                        <img src="https://pbs.twimg.com/media/D8dDZukXUAAXLdY.jpg" 
                            className={styles.teamimg} alt="img"/>
                    </div>
                    <div className={styles.teamavatar}>
                        <img src="https://pbs.twimg.com/media/BcINeMVCIAABeWd.jpg" 
                            className={styles.teamimg} alt="img"/>
                    </div>
                    <div className={styles.teamavatar}>
                        <img src="https://i0.wp.com/thatrandomagency.com/wp-content/uploads/2020/05/0.jpg?resize=500%2C500&ssl=1" 
                            className={styles.teamimg} alt="img"/>
                    </div>
                    <div className={styles.teamavatar}>
                        <img src="https://im.vsco.co/aws-us-west-2/87a614/5015405/5cf87a7ebf7e2e3d24b10d50/vsco5cf87a8138f78.jpg?w=412&dpr=2.625" 
                            className={styles.teamimg} alt="img"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Teampanel
