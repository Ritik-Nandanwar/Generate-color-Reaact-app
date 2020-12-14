import React from 'react'

const Header = ({ color, onInputChange }) => {

  return (
    <>
      <div className="container">
        <input
          value={color}
          type="text"
          className="input-field"
          placeholder="Enter the color"
          onChange={(e) => onInputChange(e.target.value)}
        />
      </div>
    </>

  )
}

export default Header
