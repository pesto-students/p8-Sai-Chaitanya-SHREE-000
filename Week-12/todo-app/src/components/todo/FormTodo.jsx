import React from 'react'
import PropTypes from 'prop-types';

const submitDiv = {
    marginTop: '20px',
};

const FormTodo = ({
  onChange,
  onClick,
  todo,
}) => {
  return (
    <form style={submitDiv}>
    <input type="text"
    onChange={(event) => onChange(event)}
    value={todo}/>  
    <button type='submit'
    onClick={(event) => onClick(event)}>Add Todo</button>
    </form>
  )
}

FormTodo.propTypes = {
  onClick: PropTypes.func,
  onChange: PropTypes.func,
}
export default FormTodo;