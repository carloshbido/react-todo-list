import React from 'react'
import PropTypes from 'prop-types';
import Button from './Button';

function Header({ title }) {

  const onClick = (e) => {
    console.log(e.target);
  }

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button onClick={onClick} text="Add" color="black" />
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
