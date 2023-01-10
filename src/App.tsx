import { useState } from "react";
import { useAppDispatch, useAppSelector } from "./store";
import { add, remove, toggleCompleted } from "./features/TodoSlice";

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
    <div className="container my-5 col-sm-5">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <div className="input-group-append">
          <button className="btn btn-outline-primary" type="button">
            Button
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
