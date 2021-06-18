import React from 'react'
import { FaTimes } from 'react-icons/fa';

function Task({task, onDelete, onToggleReminder}) {

  return (
    <div className={task.reminder ? "task reminder" : "task"} onDoubleClick={() => onToggleReminder(task.id)}>
      <h3> 
        {task.text} 
        <FaTimes 
          style={styleButtonDelete} 
          onClick={() => onDelete(task.id)}
        /> 
      </h3>
      <p><strong>Cadastro: </strong>{task.day}</p>
    </div>
  )
}

const styleButtonDelete  = {
  color: 'red',
  cursor: 'pointer',
}

export default Task
