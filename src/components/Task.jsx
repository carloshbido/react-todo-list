import React from 'react'
import { FaTimes, FaCheck } from 'react-icons/fa';


function Task({task, onDelete, onToggleReminder}) {

  return (
    <div 
      className={task.reminder ? "task reminder" : "task"} 
      >
      <h3> 
        {task.text} 
        <div className="icons">
          <FaCheck
            style={styleEditDelete}
            onClick={() => onToggleReminder(task.id)}/>
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
  color: 'red',
  cursor: 'pointer',
  marginLeft: '10px'
}

const styleEditDelete  = {
  color: 'rgb(195, 209, 0)',
  cursor: 'pointer',
}

export default Task
