import { useState } from "react";
import { add } from "../Redux/slice/TodoSlice";
import { useAppDispatch } from "../Redux/store";

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
            onchange={(e) => setTitle(e.currentTarget.value)}
        /> 
        <button onClick ={onSave}> Save </button>
<ul>


</ul>

        </div>
    );
}
export default Todo;