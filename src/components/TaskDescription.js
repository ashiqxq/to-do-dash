import React from 'react'
import './Mystyle.css'
import { useContext } from 'react';
import { TaskContext } from '../App';
function TaskDescription() {
    const {taskcontext} = useContext(TaskContext);
    return (
        <div className="disc">
            <h6>{taskcontext.body}</h6>
        </div>
    )
}

export default TaskDescription
