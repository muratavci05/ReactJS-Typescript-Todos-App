import { useState } from "react";
import { useAppDispatch, useAppSelector } from "./store";
import { add, remove, toggleCompleted } from "./features/TodoSlice";
import Marquee from "react-fast-marquee";


function App() {
  const todos = useAppSelector((state) => state.todos);
  const [title, setTitle] = useState("");

  const dispatch = useAppDispatch();

  const onSave = () => {
    dispatch(add(title));
    setTitle("");
  };

  const onDelete = (id: string) => {
    dispatch(remove(id));
  };

  const toggle = (id: string) => {
    dispatch(toggleCompleted(id));
  };
  return (
    <div className="container my-5 col-sm-5 p-5">
      
      <Marquee>
      <h1 className="titleTodos p-4"><span style={{color:"brown"}}>TypeScript with </span>TODO'S</h1>
      </Marquee>
      
      <div className="input-group mb-3">
        <input
          name="title"
          value={title}
          className="form-control"
          placeholder="entry..."
          

          //currentTarget = dinleyisinin eklendiği öge olması nedeni ile burada kullanılmıştır.
          onChange={(e) => setTitle(e.currentTarget.value)}
        />
        <div className="input-group-append">
          <button 
          className="btn btn-outline-primary" 
          type="button"
          onClick={onSave}
          >
            Save
          </button>
         
        </div>

       
      </div>
      <div>
      <ul className="" >
            {todos.map((todo)=>(
              <li key={todo.id} style={{display:"flex", marginTop:"3px"}}>
                <span className="form-control "
                
                >
                  {todo.title}
                </span>
                <button className="btn btn-outline-primary "
                onClick={()=>toggle(todo.id)}
                >
                  {todo.completed ? "uncompleted" : "Done"}
                </button>
                <button className="btn btn-outline-danger" onClick={()=>onDelete(todo.id)}>Delete</button>
              </li>
            ))}
          </ul>
          </div>
    </div>
  );
}

export default App;
