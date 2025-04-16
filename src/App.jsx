
import './App.css'
import { useRef, useState } from "react";
import Todoinsert from './components/Todoinsert';
import TodoList from './components/TodoList';

function App() {
  //Logic area
  const [todos, setTodos] = useState([
    {
        id: 1,
        text: '할 일 1',
        checked: false
    },
    {
        id: 2,
        text: '할 일 2',
        checked: true
    },
    {
        id: 3,
        text: '할 일 3',
        checked: false
    }
]); 
 const nextId = useRef(4);

const onInsert = (text) =>{
    setTodos(
      todos.concat([{
        id: nextId.current++,
        text: text,
        checked: false
      }])
    )
}

const onDelete =(id)=>{
  setTodos(todos.filter(todo => todo.id !==id)); //삭제하는 값만 제외하고 나머지 값들만 남김
};
const onToggle=(id)=>{
  setTodos(todos.map(todo =>
    todo.id === id ?  {...todo, checked: !todo.checked}:todo //
  ));
};

//view area
  return (
    <div>
      <Todoinsert onInsert={onInsert}/>
      <TodoList todos={todos} onDelete={onDelete} onToggle={onToggle}/>    
    </div>
  );
}
export default App
