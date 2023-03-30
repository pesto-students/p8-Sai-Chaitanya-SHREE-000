import React, {useState} from 'react'
import TableHeading from './TableHeading';
import FormTodo from './FormTodo';
import TodoHeading from './TodoHeading';

const Todos = () => {
    const parentDiv = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '100px',
        flexDirection: 'column',
        textAlign: 'center'
    };

    const columnWidth = {
        width: '200px'
    }
    
    const [todo, setTodo] = useState('');
    const [todoArr, setTodoArr] = useState([]);

    const captureTodo = (event) => {
        event.preventDefault();
        setTodo(event.target.value);
    };
    const addTodo = (event) => {
        event.preventDefault();
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
        <TodoHeading/>
    <table>
        <TableHeading />
        {todoArr.length > 0 && 
        todoArr.map((elem, index) => {
        return(
        <tr style={{backgroundColor: (index + 1) % 2 === 0 && 'grey'}}>
        <td style={columnWidth} key='todo'>{elem.task}</td>
        <td style={columnWidth} key='chekbox'>
        <input onClick={()=> isComplete(elem.id)} type='checkbox'/>
        </td>
        <td style={columnWidth} key='isComplete'>{elem.isComplete ? "Completed" : "Not Completed"}</td>
        </tr>)
        })
        }
    </table>
    </div>
    <FormTodo 
    captureTodo={captureTodo}
    todo={todo}
    addTodo={addTodo}
    />
    </div>
  )
}

export default Todos;