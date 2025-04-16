
import TodoListItem from './TodoListItem'; // 경로는 실제 위치에 맞게 조정


function TodoList({todos,onDelete,onToggle}) {
//Logic area
    
      

  return ( 
        <>
           <ul>
          {todos.map((todo)=>(
           < TodoListItem key={todo.id} 
           todo={todo} 
           onDelete={onDelete}
           onToggle={onToggle}/>
          ))}
    
           </ul>
    </>
  );
}

export default TodoList;  