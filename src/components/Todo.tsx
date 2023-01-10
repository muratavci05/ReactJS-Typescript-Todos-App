import { useState } from "react";
import { add } from "../features/TodoSlice";
import { useAppDispatch } from "../store";

function Todo () {
    const [title, setTitle] = useState("");

    const dispatch = useAppDispatch();

    const onSave = () => {
        dispatch(add("title"));
        setTitle("");

        
    };
    return(
        <div className="Todo">
        <input 
            name="title"
            value={title}
            onChange={(e) => setTitle(e.currentTarget.value)}
        /> 
        <button onClick ={onSave}> Save </button>
<ul>


</ul>

        </div>
    );
}
export default Todo;