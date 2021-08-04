import React from 'react'
import './Mystyle.css'
import { useContext } from 'react';
import { TaskContext } from '../App';

function RightTopBar() {
    const {taskcontext} = useContext(TaskContext);
    return (
        <div className="rHeader">
            <div>
            <avatar className="avatar">
                <img className="imgavatar" src={taskcontext.imageUrl}  alt="Opps" />
            </avatar>
            </div>
            <div className="name">
                <h4>{taskcontext.username}</h4>
            </div>
            
        </div>
    )
}

export default RightTopBar

