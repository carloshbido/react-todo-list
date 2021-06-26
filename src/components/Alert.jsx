import React from 'react'

function Alert({message, onCloseAlert}) {

  return (
    <div class="message">
      {message} 
      <span onClick={onCloseAlert}> x </span>
    </div>
  )
}

export default Alert
