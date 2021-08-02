import React from 'react'
import './RightTopBar'
import RightTopBar from './RightTopBar'
import RightTopIcons from './RightTopIcons'
import TaskDescription from './TaskDescription'
import TaskName from './TaskName'
import Document from './Document'
import Status from './Status'
import Comment from './Comment'

function RightContent() {
    return (
    <div className="content"> 
        <div className="rightcontent">
            <div className="row1">
                <div className="righttopbar">
                    <RightTopBar/>
                </div>
                <div className="righttopicons">
                    <RightTopIcons/>
                </div>
            </div>
            <div>
                <div>
                     <TaskName/>
                 </div>
            </div>
            <div className="row3">
                <TaskDescription/>
            </div>
            <div>
                <Status/>
            </div>
            <div className="row5">
                <Document />
            </div>
            <Comment/>
        
            
          
        </div>
    </div>  
    )
}

export default RightContent
