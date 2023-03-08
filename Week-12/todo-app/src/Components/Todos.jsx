import React, {useState} from 'react'

const Todos = () => {
    const parentDiv = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '100px',
        flexDirection: 'column'
    };
    
    const [todo, setTodo] = useState('');
    const [todoArr, setTodoArr] = useState([]);
    const captureTodo = (event) => {
        setTodo(event.target.value);
    };
    const addTodo = (event) => {
        setTodo('');
        if(todo.trim()) {
            const id = todoArr.length + 1;
            setTodoArr((prev) => 
                [...prev, 
                {
                    task: todo,
                    id,
                    isComplete: false
                }
            ]
        );
    };
    };

    const isComplete = (id) => {
        setTodo('');
        for(let elem of todoArr) {
            if(elem.id == id) {
                elem.isComplete = !elem.isComplete;
            };
        };
    };

  return (
    <div style={parentDiv}>
    <div>
    <h1>Your Todos</h1>
    <table>
        <tr>
        <th key='todoHed'>Todos</th>
        <th key='statHed'>Tick Box</th>
        <th key='clrHed'>Status</th>
        </tr>
        {todoArr.length > 0 && 
        todoArr.map((elem, index) => {
        return(
        <tr>
        <td key='todo'>{elem.task}</td>
        <td key='chekbox'>
        <input onClick={()=> isComplete(elem.id)} type='checkbox'/>
        </td>
        <td key='isComplete'>{elem.isComplete ? "Completed" : "Not Completed"}</td>
        </tr>)
        })
        }
    </table>
    </div>
    <div>
        <input type="text"
        onChange={captureTodo}
        value={todo}/>
        <button type='submit'
        onClick={addTodo}>Add Todo</button>
    </div>
    </div>
  )
}

export default Todos