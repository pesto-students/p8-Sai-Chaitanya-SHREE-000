import React from 'react'
import PropTypes from "prop-types";

export const ButtonElement = ({
    buttonName,
    onClick,
    style,
}) => {
  return (
    <button 
    style={style}
    onClick={onClick}
    > 
    {buttonName}
    </button>
  )
}

ButtonElement.propTypes = {
    buttonName: PropTypes.string,
    onClick: PropTypes.func,
    style: PropTypes.object,
}
