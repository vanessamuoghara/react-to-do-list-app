import React, { useState } from 'react';
import './NewTask.css'

const NewTask = ({ id, text }) => {
    const [taskComplete, setTaskComplete] = useState ( false );
    const [dateTime] = useState(new Date().toLocaleString());
    
    const toggleCompletion = (id) => {
        if (taskComplete === true  ) { setTaskComplete(false)}
        else {setTaskComplete(true)}
       
        console.log(taskComplete, 'task complete')
          
      };
    // set task completed and a classname conditional based on that state
    return (
        <div>
            
            <li key={id} className={taskComplete ? 'completed' : 'incomplete'}>
                
           <label className="checkbox">
             <input
              type="checkbox"
              onChange={() => toggleCompletion(id)}
              />
              <span className="checkmark"></span>
             <p className={taskComplete ? 'completed' : 'incomplete'}> {text}

             </p>
             <span className="task-date">{dateTime}</span>
            </label>
          </li>
        </div>
    )
}

export default NewTask;
   

// list container: new task at the top, to do component and completed task
        