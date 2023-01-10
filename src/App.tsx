import { useState } from "react";
import { useAppDispatch, useAppSelector } from "./store";
import  {add, remove, toggleCompleted}  from "./features/TodoSlice";

function App() {
  const todos = useAppSelector((state) => state.todos);
  const [title, setTitle] = useState("");

  const dispatch = useAppDispatch();

  const onSave = () => {
    dispatch(add(title));
    setTitle("");
  };

  const  onDelete = (id:string)=> {
    dispatch(remove(id))
  }

  const toggle= (id: string) => {
      dispatch(toggleCompleted(id))
  }
  return (
    <div className="App ">
      <div className="container p-2">
        <div className="col-md-4 mx-auto">

        <h1 className="todo-s">TODO'S</h1>
      <input
      
        name="title"
        value={title}
        onChange={(e) => setTitle(e.currentTarget.value)}
      />

      <button className="btn btn-success " onClick={onSave}>Save</button>
      <ul className="list-unstyled">
        {todos.map((todo) => (
          <li  key={todo.id}>
             <span className="form-control  gy-2">{todo.title}</span> 
            <button className="btn btn-primary me-2 my-2 " onClick={()=>toggle(todo.id)}>{todo.completed ? "Uncompleted" : "Mark Completed"}</button>
            <button className="btn btn-danger" onClick={() => onDelete(todo.id)}>Delete</button>
          
            </li>
        ))}
      </ul>
      </div>
      </div>
    </div>
  );
}

export default App;