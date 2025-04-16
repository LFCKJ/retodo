
import TodoListItem from './TodoListItem'; // 경로는 실제 위치에 맞게 조정


function TodoList(todos) {
//Logic area
    
      

  return ( 
        <>
           <ul>
          {todos.map((todo)=>(
           < TodoListItem ket={todo.id} todo={todo} />
          ))}
    
           </ul>
    </>
  );
}

export default TodoList;  