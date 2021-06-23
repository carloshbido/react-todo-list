import React from 'react'
import { FaTimes, FaBell, FaBellSlash} from 'react-icons/fa';

function Task({task, onDelete, onToggleReminder}) {

  return (
    <div 
      className={task.reminder ? "task reminder" : "task"} 
      >
      <h3> 
        {task.text} 
        <div className="icons">
          {task.reminder 
            ? <FaBellSlash
                style={styleButtonDelete}
                onClick={() => onToggleReminder(task.id)}/>
            : <FaBell
                style={styleEditDelete}
                onClick={() => onToggleReminder(task.id)}/>
          } 
          <FaTimes 
            style={styleButtonDelete} 
            onClick={() => onDelete(task.id)}
          /> 
        </div>
      </h3>
      <p><strong>Reminder: </strong>{task.date}</p>
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
