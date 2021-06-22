import React from 'react'
import PropTypes from 'prop-types';
import Button from './Button';

function Header({ title, onToggleShowForm, showTaskForm}) {

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button 
        onClick={onToggleShowForm} 
        text={showTaskForm ? 'Close' : 'Add'} 
        color={showTaskForm ? '#9b59b6' : '#34495e'}  />
    </header>
  )
}

Header.defaultProps = {
  title: 'To List'
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header
