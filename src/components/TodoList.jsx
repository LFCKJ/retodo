import { useState } from "react";

function TodoList() {
//Logic area
    const [todos, _setTodos] = useState([
        {
            id: 1,
            text: '할 일 1',
            done: false
        },
        {
            id: 2,
            text: '할 일 2',
            done: true
        },
        {
            id: 3,
            text: '할 일 3',
            done: false
        }
    ]); 
      



    return ( 
    <ul>
          {todos.map((item)=>(
            <li>{item.text}</li>
          ))}
    
    </ul> );
}

export default TodoList;  