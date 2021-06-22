import React from 'react'
import { FaTimes, FaCheck} from 'react-icons/fa';
import { AiFillBell } from "react-icons/ai";



function Task({task, onDelete, onToggleReminder}) {

  return (
    <div 
      className={task.reminder ? "task reminder" : "task"} 
      >
      <h3> 
        {task.text} 
        <div className="icons">
          {task.reminder 
            ? <AiFillBell
                style={styleEditDelete}
                onClick={() => onToggleReminder(task.id)}/>
            : <FaCheck
                style={styleEditDelete}
                onClick={() => onToggleReminder(task.id)}/>
          } 
          <FaTimes 
            style={styleButtonDelete} 
            onClick={() => onDelete(task.id)}
          /> 
        </div>
      </h3>
      <p><strong>Lembrete: </strong>{task.date}</p>
    </div>
  )
}

const styleButtonDelete  = {
  color: '#e74c3c',
  cursor: 'pointer',
  marginLeft: '10px'
}

const styleEditDelete  = {
  color: '#27ae60',
  cursor: 'pointer',
}

export default Task
