
import './App.css'
import { useState } from "react";
import Todoinsert from './components/Todoinsert';
import TodoList from './components/TodoList';

function App() {
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
  


//view area
  return (
    <div>
      <Todoinsert/>
      <TodoList todos={todos}/>    
    </div>
  );
}
export default App
