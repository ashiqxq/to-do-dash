import React from 'react'
import { TaskContext } from '../App';
import './Mystyle.css'
import { useContext } from 'react';


function TaskName() {
    const {taskcontext, setTaskcontext} = useContext(TaskContext);
    const handleClick = taskdata =>{
        // return function () {
        //     console.log(
        //         "2nd level trigger"
        //     )
        //     console.log(taskdata);
        //     setTaskcontext({...taskdata, task_status: !taskdata.task_status}, ()=> {console.log(taskdata)});
            
        //   }
    }
    return (
        <div className="row2">
            <div className="taskcheckbox1">
                    <input type="checkbox" 
                           id={`card1_${taskcontext.id}`} 
                           name={`card1_${taskcontext.id}`} 
                           value={`card1_${taskcontext.id}`} 
                           onClick={handleClick(taskcontext)}
                    />

                    <label htmlFor={`card1_${taskcontext.id}`}></label>
            </div>
            <div className="description">
                <h4>{taskcontext.title}</h4>
            </div>

        </div>
    )
}

export default TaskName;
