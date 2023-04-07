import React from 'react'
import PropTypes from 'prop-types';

export const InputElement = ({
    onChange,
    style,
    type,
    value,
}) => {
  return (
    <input 
    value={value}
    style={style} 
    onChange={onChange}
    type={type} 
    />
  )
}

InputElement.propTypes = {
    onChange: PropTypes.func,
    style: PropTypes.object,
    type: PropTypes.string,
    value: PropTypes.string,
}