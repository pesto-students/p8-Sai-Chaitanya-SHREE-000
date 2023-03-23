import React, {useState} from 'react'

const Todos = () => {
    const parentDiv = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '100px',
        flexDirection: 'column',
    };

    const submitDiv = {
        marginTop: '20px',
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
        let item = {};
        let list = todoArr.map((elem) => {
            if(elem.id === id) {
                item = {...elem, isComplete: !elem.isComplete};
            } else {
                item = {...elem};
            };
            return item;
        });
        setTodoArr(list);
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
        <tr style={{backgroundColor: (index + 1) % 2 === 0 && 'grey'}}>
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
    <div style={submitDiv}>
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