import React from 'react'

const submitDiv = {
    marginTop: '20px',
};

const FormTodo = ({
    captureTodo,
    todo,
    addTodo
}) => {
  return (
    <form style={submitDiv}>
    <input type="text"
    onChange={(event) => captureTodo(event)}
    value={todo}/>  
    <button type='submit'
    onClick={(event) => addTodo(event)}>Add Todo</button>
    </form>
  )
}

export default FormTodo;